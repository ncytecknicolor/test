import Image from 'next/image';
import { Palette, Globe, Search, Code2, Share2, ShoppingCart, GraduationCap, LifeBuoy, MessageCircle, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const WA = 'https://api.whatsapp.com/send?phone=528131979805&text=Hola%20quiero%20informacion%20de%20los%20servicios%20de%20Dynamedia';

const servicios = [
  { icon: Globe, t: 'Diseño web', d: 'Sitios que se ven bien y cargan rápido en computadora y celular.' },
  { icon: Code2, t: 'Software a la medida', d: 'Encuestas, inventarios, nómina y lo que tu empresa necesite.' },
  { icon: Search, t: 'Posicionamiento en Google', d: 'Llevamos tu sitio a la primera página de resultados.' },
  { icon: ShoppingCart, t: 'Tiendas virtuales', d: 'Con formas de pago y envío integradas para vender desde el primer día.' },
  { icon: Share2, t: 'Redes sociales para pymes', d: 'Una identidad profesional que te conecta con el cliente ideal.' },
  { icon: Palette, t: 'Diseño gráfico', d: 'Logotipos, empaques, diseño editorial, material POP e impresos.' },
];
const proyectos = ['HEMSA', 'Campo Aventura', 'Admynco', 'Nibo', 'Protectus', 'Vida Esencial', 'Nutriceramic', 'Purizee', 'Eitmedia'];
const cifras = [['15', 'años de experiencia'], ['289', 'proyectos desarrollados'], ['320', 'clientes satisfechos'], ['1,590', 'horas de desarrollo']];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio"><Image src="/brand/logo-dynamedia.png" alt="Dynamedia" width={150} height={38} priority /></a>
          <div className="hidden gap-7 text-sm font-semibold md:flex">
            <a href="#servicios">Servicios</a><a href="#proyectos">Proyectos</a><a href="#cursos">Cursos</a><a href="#soporte">Soporte</a><a href="#contacto">Contacto</a>
          </div>
          <a href={WA} className="flex items-center gap-2 rounded-md bg-naranja px-4 py-2 text-sm font-semibold text-white hover:bg-naranja-claro"><MessageCircle size={16} /> WhatsApp</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-azul-oscuro text-white">
          <div aria-hidden className="rombo absolute -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 md:right-10 md:h-[32rem] md:w-[32rem]" style={{ background: 'linear-gradient(135deg,#F26B21 50%,#1B4F9C 50%)' }} />
          <div aria-hidden className="rombo absolute -right-8 top-1/2 h-48 w-48 -translate-y-1/2 bg-white/90 md:right-48 md:h-64 md:w-64" style={{ clipPath: 'polygon(0 0,100% 0,0 100%)' }} />
          <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
            <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight md:text-6xl">Tu negocio, mejor conectado en internet.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">Diseño web, software a la medida y marketing digital para empresas en Monterrey y todo México.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contacto" className="rounded-md bg-naranja px-6 py-3 font-semibold hover:bg-naranja-claro">Cuéntanos tu proyecto</a>
              <a href="#servicios" className="rounded-md border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">Ver servicios</a>
            </div>
          </div>
        </section>

        <section id="nosotros" className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:grid-cols-2 md:grid-cols-4">
          {cifras.map(([n, l]) => (
            <div key={l}><p className="font-display text-5xl font-bold text-azul">{n}</p><p className="mt-1 text-grafito/70">{l}</p></div>
          ))}
        </section>

        <section id="servicios" className="bg-niebla py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Lo que hacemos por tu empresa</h2>
            <ul className="mt-10 divide-y divide-grafito/10 border-y border-grafito/10">
              {servicios.map(({ icon: Icon, t, d }) => (
                <li key={t} className="grid items-center gap-3 py-6 md:grid-cols-[3rem_16rem_1fr]">
                  <Icon className="text-naranja" size={28} />
                  <h3 className="font-display text-xl font-semibold text-azul">{t}</h3>
                  <p className="text-grafito/80">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Proyectos recientes</h2>
          <p className="mt-3 max-w-xl text-grafito/80">Marcas que confiaron en nosotros. Agrega las capturas en <code>public/projects</code> y reemplaza estos bloques por <code>next/image</code>.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {proyectos.map((p) => (
              <div key={p} className="flex aspect-[4/3] items-center justify-center rounded-lg bg-grafito font-display text-lg font-semibold text-white">{p}</div>
            ))}
          </div>
        </section>

        <section className="bg-niebla py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div id="cursos">
              <GraduationCap className="text-naranja" size={32} />
              <h2 className="mt-3 font-display text-2xl font-bold">Cursos presenciales</h2>
              <p className="mt-3 text-grafito/80">Capacitamos a equipos y a particulares que quieren crear o mantener páginas de internet. Hay curso de WordPress y de posicionamiento en Google.</p>
            </div>
            <div id="soporte">
              <LifeBuoy className="text-naranja" size={32} />
              <h2 className="mt-3 font-display text-2xl font-bold">Asesoría y soporte técnico</h2>
              <p className="mt-3 text-grafito/80">Resolvemos los problemas de tu página o sistema. Pregunta por nuestras pólizas de soporte.</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-grafito py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 max-w-md text-white/80">Escríbenos y te respondemos pronto.</p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3"><Mail className="text-naranja" size={20} /> info@dynamedia.mx</li>
                <li className="flex items-center gap-3"><MapPin className="text-naranja" size={20} /> Monterrey, Nuevo León</li>
                <li><a href={WA} className="flex items-center gap-3 hover:text-naranja-claro"><MessageCircle className="text-naranja" size={20} /> Escríbenos por WhatsApp</a></li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="bg-grafito py-6 text-center text-sm text-white/60">© 2026 Dynamedia</footer>
    </>
  );
}
