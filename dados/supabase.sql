-- ============================================================
-- L'amour Essência — estrutura do banco (Supabase)
-- Cole tudo no SQL Editor do projeto e clique em Run.
-- (Só é necessário se você escolher o Supabase em vez do Firebase.)
-- ============================================================

create table if not exists site_config (
  id            int primary key,
  dados         jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

create table if not exists produtos (
  id            text primary key,
  dados         jsonb not null default '{}'::jsonb,
  atualizado_em timestamptz not null default now()
);

insert into site_config (id, dados) values (1, '{}'::jsonb)
on conflict (id) do nothing;

-- Qualquer visitante LÊ. Só quem está logado ESCREVE.
alter table site_config enable row level security;
alter table produtos    enable row level security;

drop policy if exists "config leitura publica" on site_config;
create policy "config leitura publica" on site_config for select using (true);

drop policy if exists "config escrita admin" on site_config;
create policy "config escrita admin" on site_config for all to authenticated using (true) with check (true);

drop policy if exists "produtos leitura publica" on produtos;
create policy "produtos leitura publica" on produtos for select using (true);

drop policy if exists "produtos escrita admin" on produtos;
create policy "produtos escrita admin" on produtos for all to authenticated using (true) with check (true);

-- Fotos
insert into storage.buckets (id, name, public) values ('fotos', 'fotos', true)
on conflict (id) do nothing;

drop policy if exists "fotos leitura publica" on storage.objects;
create policy "fotos leitura publica" on storage.objects for select using (bucket_id = 'fotos');

drop policy if exists "fotos envio admin" on storage.objects;
create policy "fotos envio admin" on storage.objects for insert to authenticated with check (bucket_id = 'fotos');

drop policy if exists "fotos troca admin" on storage.objects;
create policy "fotos troca admin" on storage.objects for update to authenticated using (bucket_id = 'fotos');

drop policy if exists "fotos exclusao admin" on storage.objects;
create policy "fotos exclusao admin" on storage.objects for delete to authenticated using (bucket_id = 'fotos');

-- Depois de rodar:
-- Authentication -> Users -> Add user: crie o e-mail e a senha da administradora.
-- Authentication -> Providers -> Email: desligue "Allow new users to sign up".
