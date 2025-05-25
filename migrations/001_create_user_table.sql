drop table if exists public.user;
create table public.user(
    id serial primary key,
    username varchar(50),
    pass varchar(50)
);