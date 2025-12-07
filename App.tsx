import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Settings, 
  PenTool, 
  Home as HomeIcon, 
  Maximize2, 
  Sun,
  ShieldCheck,
  Building2,
  Phone
} from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { AIImage } from './components/AIImage';
import { ViewState, ServiceItem } from './types';

// Animation variants
const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-nex-slate">
      <Navigation currentView={view} onChangeView={setView} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === ViewState.HOME && <HomeSection key="home" onChangeView={setView} />}
          {view === ViewState.ABOUT && <AboutSection key="about" />}
          {view === ViewState.SERVICES && <ServicesSection key="services" />}
          {view === ViewState.GALLERY && <GallerySection key="gallery" />}
          {view === ViewState.CONTACT && <ContactSection key="contact" />}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

// ----------------------------------------------------------------------------
// SECTIONS
// ----------------------------------------------------------------------------

// --- HOME ---
const HomeSection: React.FC<{ onChangeView: (v: ViewState) => void }> = ({ onChangeView }) => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AIImage 
             src="https://picsum.photos/seed/arch1/1920/1080"
             alt="Modern Glass and Aluminum Home"
             prompt="Ultra modern minimalist house facade, large black aluminum sliding glass doors, floor to ceiling windows, white concrete, blue sky, high end architectural photography"
             className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nex-dark/80 to-nex-dark/20" />
        </div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="container mx-auto px-4 relative z-10 text-white"
        >
          <div className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-4 flex items-center gap-3">
               <div className="h-[2px] w-12 bg-nex-blue"></div>
               <span className="text-nex-blue tracking-[0.2em] text-sm font-bold uppercase">Soluciones en Aluminio y PVC</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display font-bold text-6xl md:text-8xl tracking-tight mb-6 leading-none">
              Alu<span className="text-nex-blue">Nexo</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-10 font-light border-l-4 border-nex-blue pl-6">
              Expertos en carpintería de aluminio, PVC y sistemas de vidrio.
              Transformamos espacios con calidad, diseño y eficiencia.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onChangeView(ViewState.CONTACT)}
                className="bg-nex-blue hover:bg-sky-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg border border-nex-blue"
              >
                Solicitar Presupuesto
              </button>
              <button
                onClick={() => onChangeView(ViewState.GALLERY)}
                className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest transition-all"
              >
                Ver Proyectos
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Intro / Nuestra Empresa Preview */}
      <section className="bg-white py-24 relative overflow-hidden">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="border-l-8 border-nex-blue pl-4">
                 <AIImage 
                   src="https://picsum.photos/seed/worker2/600/600"
                   alt="Precision installation"
                   prompt="Detailed close up of a professional installing a high quality white PVC window handle, bright clean composition, construction detail"
                   className="w-full h-[500px] object-cover shadow-2xl rounded-sm"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-nex-dark text-white p-8 shadow-xl max-w-[200px]">
                   <span className="block text-5xl font-bold font-display text-nex-blue mb-2">100%</span>
                   <span className="text-xs uppercase tracking-wider font-bold">Calidad Garantizada</span>
               </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-nex-blue font-bold uppercase tracking-widest text-sm mb-2 block">Presentación</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-nex-dark">Bienvenidos a AluNexo</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En AluNexo somos profesionales en fabricación e instalación de sistemas de aluminio, 
                carpintería en PVC y soluciones avanzadas de vidrio.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nuestro equipo humano está altamente cualificado para atender y personalizar su proyecto, 
                garantizando acabados perfectos tanto en obra nueva como en rehabilitaciones.
              </p>
              <button 
                onClick={() => onChangeView(ViewState.ABOUT)}
                className="text-nex-dark border-b-2 border-nex-blue pb-1 hover:text-nex-blue transition-colors uppercase text-sm font-bold tracking-wider"
              >
                Conoce Más Sobre Nosotros
              </button>
            </motion.div>
         </div>
       </section>

      {/* Services Preview */}
      <section className="py-24 bg-nex-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-nex-blue font-bold uppercase tracking-widest text-sm mb-2 block">Soluciones Integrales</span>
            <h2 className="text-4xl font-display font-bold text-nex-dark">Nuestros Servicios</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Especialistas en cerramientos eficientes y diseño arquitectónico en vidrio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Carpintería Aluminio" 
              icon={<Settings className="w-10 h-10" />} 
              imagePrompt="Modern sleek black aluminum window frame detail, minimalist architecture"
              id="aluminio"
            />
            <ServiceCard 
              title="Carpintería PVC" 
              icon={<PenTool className="w-10 h-10" />} 
              imagePrompt="High quality white PVC window installation, energy efficient, double glazing cross section"
              id="pvc"
            />
             <ServiceCard 
              title="Servicio Vidrio" 
              icon={<Maximize2 className="w-10 h-10" />} 
              imagePrompt="Sheets of tempered glass in factory, modern industrial"
              id="vidrio"
            />
             <ServiceCard 
              title="Sistemas de Vidrio" 
              icon={<HomeIcon className="w-10 h-10" />} 
              imagePrompt="Frameless glass railing on modern balcony with sea view"
              id="sistemas"
            />
          </div>
          
          <div className="text-center mt-12">
             <button 
              onClick={() => onChangeView(ViewState.SERVICES)}
              className="bg-nex-dark text-white hover:bg-nex-blue px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-all shadow-md"
             >
               Ver Todos Los Servicios
             </button>
          </div>
        </div>
      </section>
    </>
  );
};

// --- ABOUT ---
const AboutSection: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
       {/* Header Banner */}
       <div className="h-[40vh] relative flex items-center justify-center bg-nex-dark overflow-hidden">
          <div className="absolute inset-0 opacity-30">
             <AIImage 
              src="https://picsum.photos/seed/aboutbg/1920/600" 
              alt="About Banner"
              prompt="Architectural blueprints and aluminum profile samples on a white table, top view, clean professional"
              className="w-full h-full"
             />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-2">Nosotros</h1>
            <div className="text-nex-blue text-sm font-bold uppercase tracking-widest">AluNexo / Nosotros</div>
          </div>
       </div>

       {/* Content */}
       <section className="py-24 bg-white">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <span className="text-nex-blue font-bold uppercase tracking-widest text-sm block">Sobre AluNexo</span>
              <h2 className="text-4xl font-display font-bold text-nex-dark">Excelencia y Transparencia</h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>En AluNexo, llevamos años dedicándonos a crear espacios únicos y funcionales que reflejan el estilo y las necesidades técnicas de nuestros clientes en Illes Balears.</p>
                <p>Nuestro equipo está compuesto por técnicos especializados en aluminio, PVC y vidrio. Nos caracterizamos por la precisión en el montaje y el uso de materiales de primera calidad que garantizan durabilidad y aislamiento.</p>
                <p>Nos enorgullecemos de nuestro enfoque centrado en el cliente, asesorando desde el primer momento para encontrar la solución más eficiente energéticamente y estéticamente atractiva.</p>
              </div>
            </div>
            <div className="relative h-[500px]">
               <AIImage 
                 src="https://picsum.photos/seed/team/800/800"
                 alt="Our Team"
                 prompt="Professional glazier installing a large glass pane, safety gear, bright modern construction site"
                 className="w-full h-full rounded-sm shadow-xl object-cover"
               />
               <div className="absolute top-10 -left-10 hidden md:block bg-nex-blue p-6 shadow-lg max-w-xs text-white">
                 <p className="font-display font-bold text-lg">"Materiales de vanguardia para hogares del futuro."</p>
               </div>
            </div>
         </div>
       </section>

       {/* Why Choose Us */}
       <section className="py-24 bg-nex-gray">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 h-[600px]">
                <AIImage 
                  src="https://picsum.photos/seed/detail/800/800"
                  alt="Detail Quality"
                  prompt="Macro shot of aluminium window corner joinery, high precision, metallic texture, silver and glass"
                  className="w-full h-full object-cover shadow-2xl rounded-sm"
                />
             </div>
             <div className="order-1 md:order-2">
                <span className="text-nex-blue font-bold uppercase tracking-widest text-sm block mb-2">Nuestros Valores</span>
                <h2 className="text-4xl font-display font-bold text-nex-dark mb-8">¿Por qué elegir AluNexo?</h2>
                <p className="text-gray-600 mb-8">Compromiso total con el resultado final y la satisfacción de nuestros clientes.</p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Materiales certificados de alta gama",
                    "Aislamiento térmico y acústico garantizado",
                    "Diseños personalizados a medida",
                    "Servicio post-venta dedicado"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-nex-blue w-6 h-6" />
                      <span className="font-medium text-nex-dark">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-sm font-bold mb-1 text-nex-dark">
                        <span>Eficiencia Energética</span>
                        <span>100%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-nex-blue w-[100%]"></div>
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-sm font-bold mb-1 text-nex-dark">
                        <span>Durabilidad</span>
                        <span>98%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-nex-blue w-[98%]"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>
    </motion.div>
  );
};

// --- SERVICES ---
const ServicesSection: React.FC = () => {
  const allServices: ServiceItem[] = [
    { id: '1', title: 'Carpintería Aluminio', description: 'Ventanas y puertas de aluminio con rotura de puente térmico.', iconName: 'Settings', imagePrompt: 'Black aluminium sliding doors modern minimalist living room' },
    { id: '2', title: 'Carpintería PVC', description: 'Máximo aislamiento térmico y acústico con sistemas alemanes.', iconName: 'PenTool', imagePrompt: 'White PVC turn and tilt window detail modern home' },
    { id: '3', title: 'Servicio Vidrio', description: 'Corte y manufactura de vidrio, espejos y mamparas.', iconName: 'Maximize2', imagePrompt: 'Glass cutting machine industrial factory' },
    { id: '4', title: 'Sistemas de Vidrio', description: 'Barandillas, cerramientos y cortinas de cristal sin perfiles.', iconName: 'HomeIcon', imagePrompt: 'Modern glass balcony railing stainless steel fittings' },
    { id: '5', title: 'Cortina de Cristal', description: 'Cerramientos plegables ideales para terrazas y porches.', iconName: 'Sun', imagePrompt: 'Folding glass curtains open terrace sunny day' },
    { id: '6', title: 'Protección Solar', description: 'Mallorquinas, persianas y sistemas de control solar.', iconName: 'ShieldCheck', imagePrompt: 'Modern aluminium louvered shutters mallorca style white' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
       <div className="h-[40vh] relative flex items-center justify-center bg-nex-dark overflow-hidden">
          <div className="absolute inset-0 opacity-30">
             <AIImage 
               src="https://picsum.photos/seed/servicebg/1920/600"
               alt="Services Banner"
               prompt="Industrial workshop aluminium profiles stacking clean"
               className="w-full h-full"
             />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-2">Servicios</h1>
            <div className="text-nex-blue text-sm font-bold uppercase tracking-widest">AluNexo / Servicios</div>
          </div>
       </div>

       <section className="py-24 bg-white">
         <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-nex-blue font-bold uppercase tracking-widest text-sm mb-2 block">Qué Realizamos</span>
              <h2 className="text-4xl font-display font-bold text-nex-dark mb-6">Catálogo de Servicios</h2>
              <p className="text-gray-500">
                En AluNexo ofrecemos soluciones integrales para cerramientos. Desde la fabricación hasta la instalación final.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((service) => (
                <div key={service.id} className="group border border-gray-100 hover:border-nex-blue/30 hover:shadow-xl transition-all duration-300 p-6 bg-white rounded-sm">
                   <div className="text-nex-blue mb-4">
                      {/* Icon rendering logic simplified for demo */}
                      <Settings className="w-12 h-12" />
                   </div>
                   <h3 className="text-xl font-bold text-nex-dark mb-3">{service.title}</h3>
                   <div className="h-48 mb-4 overflow-hidden rounded-sm bg-gray-100">
                      <AIImage 
                        src={`https://picsum.photos/seed/${service.id}/400/300`}
                        alt={service.title}
                        prompt={service.imagePrompt}
                        className="w-full h-full"
                      />
                   </div>
                   <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                   <button className="text-nex-blue font-bold text-sm uppercase flex items-center gap-2 group-hover:gap-3 transition-all">
                     Detalles <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              ))}
            </div>
         </div>
       </section>
       
       {/* Efficiency Banner */}
       <section className="bg-nex-blue py-16 text-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
                <h3 className="text-3xl font-display font-bold mb-4">Especialistas en Eficiencia Energética</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Nuestras ventanas de PVC y Aluminio con rotura de puente térmico cumplen con los más altos estándares para las ayudas de los Fondos Next Generation. Ahorra energía y mejora el confort de tu hogar.
                </p>
                <button className="bg-white text-nex-blue px-6 py-2 rounded-sm font-bold text-sm uppercase">Consultar Ayudas</button>
             </div>
             <div className="md:w-1/2 flex justify-center">
                <Building2 className="w-32 h-32 text-white/20" />
             </div>
          </div>
       </section>
    </motion.div>
  );
};

// --- GALLERY ---
const GallerySection: React.FC = () => {
  const projects = [
    { id: 1, prompt: "Modern villa facade with large black aluminium sliding windows and pool" },
    { id: 2, prompt: "Interior view of white PVC windows in a modern bright living room" },
    { id: 3, prompt: "Frameless glass curtain system on a terrace with ocean view" },
    { id: 4, prompt: "Commercial storefront with large fixed glass panes and aluminum door" },
    { id: 5, prompt: "Bathroom mirror and glass shower enclosure installation" },
    { id: 6, prompt: "Bioclimatic pergola with glass sliding doors in a garden" },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
       <div className="h-[40vh] relative flex items-center justify-center bg-nex-dark overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <AIImage 
              src="https://picsum.photos/seed/gallerybg/1920/600"
              alt="Gallery Banner"
              prompt="Luxury modern architecture glass facade sunset"
              className="w-full h-full"
            />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-2">Galería</h1>
            <div className="text-nex-blue text-sm font-bold uppercase tracking-widest">AluNexo / Galería</div>
          </div>
       </div>

       <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
             <div className="text-center mb-16">
                <span className="text-nex-blue font-bold uppercase tracking-widest text-sm mb-2 block">Nuestros Trabajos</span>
                <h2 className="text-4xl font-display font-bold text-nex-dark">Proyectos Realizados</h2>
                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                  Una selección de instalaciones de aluminio, PVC y vidrio en viviendas y comercios de Mallorca.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <div key={p.id} className="aspect-[4/3] relative group overflow-hidden cursor-pointer rounded-sm shadow-md">
                     <AIImage 
                       src={`https://picsum.photos/seed/proj${p.id}/800/600`}
                       alt={`Project ${p.id}`}
                       prompt={p.prompt}
                       className="w-full h-full"
                     />
                     <div className="absolute inset-0 bg-nex-blue/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 px-4">
                           <h3 className="text-white font-bold text-xl mb-2">Proyecto Residencial</h3>
                           <p className="text-white/80 text-sm">Carpintería y Vidrio</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
       </section>
    </motion.div>
  );
};

// --- CONTACT ---
const ContactSection: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
       <div className="h-[40vh] relative flex items-center justify-center bg-nex-dark overflow-hidden">
          <div className="absolute inset-0 opacity-30">
             <AIImage 
               src="https://picsum.photos/seed/contactbg/1920/600"
               alt="Contact Banner"
               prompt="Customer service desk modern bright office"
               className="w-full h-full"
             />
          </div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-display font-bold text-white mb-2">Contacto</h1>
            <div className="text-nex-blue text-sm font-bold uppercase tracking-widest">AluNexo / Contacto</div>
          </div>
       </div>

       <section className="py-24 bg-white">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">
             
             {/* Form */}
             <div>
               <h2 className="text-3xl font-display font-bold text-nex-dark mb-8">Solicita tu presupuesto sin compromiso</h2>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                     <input type="text" placeholder="Nombre" className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:border-nex-blue transition-colors" />
                     <input type="email" placeholder="Email" className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:border-nex-blue transition-colors" />
                  </div>
                  <input type="text" placeholder="Teléfono" className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:border-nex-blue transition-colors" />
                  <input type="text" placeholder="Asunto (Ej: Ventanas PVC, Cerramiento Terraza)" className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:border-nex-blue transition-colors" />
                  <textarea rows={5} placeholder="Detalles del proyecto..." className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:border-nex-blue transition-colors"></textarea>
                  
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="privacy" className="rounded text-nex-blue focus:ring-nex-blue" />
                    <label htmlFor="privacy" className="text-sm text-gray-500">He leído y acepto la política de privacidad</label>
                  </div>

                  <button className="bg-nex-dark hover:bg-nex-blue text-white px-10 py-4 font-bold uppercase tracking-widest transition-all w-full md:w-auto shadow-lg">
                    Enviar Consulta
                  </button>
               </form>
             </div>

             {/* Info */}
             <div className="bg-nex-gray p-10 h-fit border-t-4 border-nex-blue">
                <h3 className="text-xl font-bold text-nex-dark mb-6 border-b border-gray-300 pb-4">Información de Contacto</h3>
                <div className="space-y-8">
                   <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-nex-blue h-fit">
                        <HomeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold text-nex-dark block mb-1">Dirección:</span>
                        <p className="text-gray-600 text-sm">Carrer de sa Torre, 35, 07141<br/>Marratxinet, Illes Balears</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-nex-blue h-fit">
                         <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold text-nex-dark block mb-1">Teléfono:</span>
                        <p className="text-gray-600 text-sm">+34 667 405 156</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="bg-white p-3 rounded-full shadow-sm text-nex-blue h-fit">
                         <Settings className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-bold text-nex-dark block mb-1">Email:</span>
                        <p className="text-gray-600 text-sm">info@alunexo.com</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </section>

       {/* Map Placeholder */}
       <div className="h-[400px] w-full bg-gray-200 relative">
          <AIImage 
            src="https://picsum.photos/seed/map/1920/400"
            alt="Map location Marratxinet"
            prompt="Map illustration of Marratxinet Mallorca minimalist style clean"
            className="w-full h-full opacity-60 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-4 shadow-xl rounded-full relative group cursor-pointer">
                <div className="w-4 h-4 bg-nex-blue rounded-full animate-ping absolute top-4 left-4"></div>
                <div className="w-4 h-4 bg-nex-blue rounded-full relative"></div>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-nex-dark text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Estamos aquí
                </div>
             </div>
          </div>
       </div>
    </motion.div>
  );
};

// --- HELPER COMPONENTS ---

const ServiceCard: React.FC<{ title: string, icon: React.ReactNode, imagePrompt: string, id: string }> = ({ title, icon, imagePrompt, id }) => (
  <div className="bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-nex-blue">
    <div className="text-nex-blue mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-lg font-bold text-nex-dark mb-4 group-hover:text-nex-blue transition-colors">{title}</h3>
    <div className="h-32 w-full overflow-hidden rounded-sm mb-4 bg-gray-100">
      <AIImage 
        src={`https://picsum.photos/seed/${id}/400/300`}
        alt={title}
        prompt={imagePrompt}
        className="w-full h-full"
      />
    </div>
  </div>
);