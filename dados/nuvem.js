/* Conexão da loja com o banco na internet.
   Descomente UM dos dois blocos e preencha.
   Também dá para gerar este arquivo pronto no painel:
   Administrador -> Conexão -> "Gerar nuvem.js do site".

   Enquanto os dois estiverem comentados, o site funciona, mas as
   alterações do painel ficam salvas só no navegador de quem editou. */

/* ---------- OPÇÃO A — Firebase (Firestore) ----------
   Console do Firebase -> Configurações do projeto -> Seus apps -> Configuração do SDK */
 window.LAMOUR_NUVEM = {
   provedor: "firebase",
   projectId: "loja-lamour",
   apiKey: "AIzaSyCI4xlEAv2gCZRVWkJelYMQz4-xtjM23jc"
 };

/* ---------- OPÇÃO B — Supabase (Postgres) ----------
   Painel do Supabase -> Project Settings -> API */
// window.LAMOUR_NUVEM = {
//   provedor: "supabase",
//   url: "https://xxxxxxxxxxxx.supabase.co",
//   anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
//   bucket: "fotos"
// };
