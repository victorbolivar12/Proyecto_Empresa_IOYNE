PGDMP         )                 {            empresa_ioyne    10.20    10.20 $               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false                       1262    81936    empresa_ioyne    DATABASE     ?   CREATE DATABASE empresa_ioyne WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE empresa_ioyne;
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false                       0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12924    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false                       0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            ?            1259    90146 	   customers    TABLE     8  CREATE TABLE public.customers (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    telefono character varying(20) NOT NULL,
    direccion character varying(200) NOT NULL,
    edad integer NOT NULL,
    correo character varying(100) NOT NULL
);
    DROP TABLE public.customers;
       public         postgres    false    3            ?            1259    90144    customers_idCliente_seq    SEQUENCE     ?   CREATE SEQUENCE public."customers_idCliente_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."customers_idCliente_seq";
       public       postgres    false    3    199                       0    0    customers_idCliente_seq    SEQUENCE OWNED BY     N   ALTER SEQUENCE public."customers_idCliente_seq" OWNED BY public.customers.id;
            public       postgres    false    198            ?            1259    98322    products    TABLE     ?   CREATE TABLE public.products (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    cantidad integer NOT NULL,
    detalle character varying(100) NOT NULL,
    precio integer NOT NULL
);
    DROP TABLE public.products;
       public         postgres    false    3            ?            1259    98320    products_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public       postgres    false    201    3                       0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
            public       postgres    false    200            ?            1259    114704    quotes    TABLE     ?   CREATE TABLE public.quotes (
    id integer NOT NULL,
    date date NOT NULL,
    "userId" integer NOT NULL,
    "cosumerId" integer NOT NULL,
    total integer NOT NULL
);
    DROP TABLE public.quotes;
       public         postgres    false    3            ?            1259    114709    quotes_products    TABLE     ?   CREATE TABLE public.quotes_products (
    id integer NOT NULL,
    "idQuote" integer NOT NULL,
    "idProduct" integer NOT NULL,
    "Cantidad" integer NOT NULL
);
 #   DROP TABLE public.quotes_products;
       public         postgres    false    3            ?            1259    81944    users    TABLE     ?   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    email character varying(200) NOT NULL,
    rol character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         postgres    false    3            ?            1259    81942    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public       postgres    false    3    197                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
            public       postgres    false    196            ?
           2604    90149    customers id    DEFAULT     u   ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public."customers_idCliente_seq"'::regclass);
 ;   ALTER TABLE public.customers ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    199    198    199            ?
           2604    98325    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    201    200    201            ?
           2604    81947    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    197    196    197                      0    90146 	   customers 
   TABLE DATA               \   COPY public.customers (id, nombre, apellido, telefono, direccion, edad, correo) FROM stdin;
    public       postgres    false    199   b%                 0    98322    products 
   TABLE DATA               I   COPY public.products (id, nombre, cantidad, detalle, precio) FROM stdin;
    public       postgres    false    201   ?&                 0    114704    quotes 
   TABLE DATA               H   COPY public.quotes (id, date, "userId", "cosumerId", total) FROM stdin;
    public       postgres    false    202   b'                 0    114709    quotes_products 
   TABLE DATA               Q   COPY public.quotes_products (id, "idQuote", "idProduct", "Cantidad") FROM stdin;
    public       postgres    false    203   ?'                 0    81944    users 
   TABLE DATA               C   COPY public.users (id, username, password, email, rol) FROM stdin;
    public       postgres    false    197   ?'                  0    0    customers_idCliente_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."customers_idCliente_seq"', 10, true);
            public       postgres    false    198                       0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 11, true);
            public       postgres    false    200                        0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 12, true);
            public       postgres    false    196            ?
           2606    90156    customers customers_correo_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_correo_key UNIQUE (correo);
 H   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_correo_key;
       public         postgres    false    199            ?
           2606    90154    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public         postgres    false    199            ?
           2606    98327    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public         postgres    false    201            ?
           2606    114708    quotes quotes_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.quotes
    ADD CONSTRAINT quotes_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.quotes DROP CONSTRAINT quotes_pkey;
       public         postgres    false    202            ?
           2606    114713 $   quotes_products quotes_products_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.quotes_products
    ADD CONSTRAINT quotes_products_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.quotes_products DROP CONSTRAINT quotes_products_pkey;
       public         postgres    false    203            ?
           2606    81949    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public         postgres    false    197               "  x?]??n?0F盧??"??g???
A???*?)??rjy?L}??X??,0Y?????6'?P??.??zJ?????M?t?g|	??/f?'F????7$+?&?07?WU<?G?KxAcH?A?J{4?Ps??4?O?5ޙr؞to?p???????/(v???X,WP(0??#??;?b?ꇛ?4y|?Ď??I{j\hq?ʖ?%???>??T???O..??Jdu?bs??ɘ?/?GX?4s8?&?s??U???s+?;?xw??q?<??5<Q?#x???I??????         ?   x?U?;?0D??S?h?? J??B?F4Kb??M?C?Qs?\[??7;??Q???z4}8?M?rt?xoAM1?-??%ɂ?"?3TbE8:X??ė>?????z?9????3?A?7???u?^?UjX??cPDOJ??f??I??4.???я???qK'???'$[\???R?1????E?b?%vj?O?/Z	         (   x?3?4202?5 "#NC ?0?2B?s9??\1z\\\ ?*?         .   x?3?4B#.#?i?e???˄$b?e
?M?|3?,P]? ??@         ?   x?m??
?@E?;??֐B++?a?ņ}????M`?t??3%?F?CDY?M????Y??V*8\??NTᶚ%{6?????T???p??R???ц#?v?-?+??MiK?????g!t?C?1di?@J?
"?k?VX     