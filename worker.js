export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });

    if (url.pathname === '/api/health') {
      return Response.json({ ok: true, service: 'mmo-wom', game: 'TTS 3D RPG' }, { headers: cors });
    }

    // Prototype save API. Bind a KV namespace named GAME_SAVE in the mmo-wom Worker.
    if (url.pathname === '/api/save' && request.method === 'POST') {
      if (!env.GAME_SAVE) return Response.json({ ok: false, error: 'GAME_SAVE binding is not configured' }, { status: 503, headers: cors });
      const data = await request.json();
      await env.GAME_SAVE.put('prototype-player', JSON.stringify(data));
      return Response.json({ ok: true }, { headers: cors });
    }

    if (url.pathname === '/api/load' && request.method === 'GET') {
      if (!env.GAME_SAVE) return Response.json({ ok: false, error: 'GAME_SAVE binding is not configured' }, { status: 503, headers: cors });
      const data = await env.GAME_SAVE.get('prototype-player', 'json');
      return Response.json(data || {}, { headers: cors });
    }

    return new Response('TTS 3D RPG API', { headers: cors });
  }
};
