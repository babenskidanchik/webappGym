--
-- PostgreSQL database dump
--

\restrict dh206FWoSktAPMBimz1c8DGLEUlhDOxuGBxgaSGbPnk4gCIDYgh3h15oWhNkdJm

-- Dumped from database version 16.14 (Debian 16.14-1.pgdg13+1)
-- Dumped by pg_dump version 16.14 (Debian 16.14-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: gym
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    password_hash text NOT NULL,
    role character varying(50) DEFAULT 'user'::character varying,
    status character varying(50) DEFAULT 'guest'::character varying,
    membership character varying(50),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO gym;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: gym
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO gym;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gym
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: gym
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: gym
--

COPY public.users (id, name, email, password_hash, role, status, membership, created_at) FROM stdin;
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gym
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: gym
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: gym
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict dh206FWoSktAPMBimz1c8DGLEUlhDOxuGBxgaSGbPnk4gCIDYgh3h15oWhNkdJm

