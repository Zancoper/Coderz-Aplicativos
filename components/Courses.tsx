
import React from 'react';
import { Star, Users, Clock } from 'lucide-react';

const courses = [
  {
    image: "https://images.unsplash.com/photo-1617040619263-41c5a9ca7521?q=80&w=2070&auto=format&fit=crop",
    category: "Full Stack",
    title: "Desenvolvimento de Apps com IA",
    rating: 4.9,
    students: "60",
    duration: "10h",
    price: "R$ 397,90"
  },
  {
    image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/comunidade-coderz-app-znoa2v/assets/d9k117g1ojmr/ChatGPT_Image_3_de_jan._de_2026%2C_18_08_27.png",
    category: "Low-Code",
    title: "Crie um App de Delivery no FlutterFlow",
    rating: 5.0,
    students: "80",
    duration: "20h",
    price: "R$ 189,90"
  },
  {
    image: "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/comunidade-coderz-app-znoa2v/assets/rh5iigu4rq66/baixados_(1).png",
    category: "Low-Code",
    title: "Aprenda FlutterFlow",
    rating: 4.8,
    students: "1600",
    duration: "15h",
    price: "R$ 99,90"
  }
];

const Courses: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <div key={index} className="group bg-[#150a2b] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all shadow-lg">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-pink-600 text-[10px] font-black uppercase tracking-widest">
              {course.category}
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-1 text-yellow-500 mb-2">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold">{course.rating}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-pink-400 transition-colors">
              {course.title}
            </h3>
            
            <div className="flex items-center justify-between text-gray-500 text-sm mb-6 border-t border-white/5 pt-4">
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{course.students} alunos</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-white">{course.price}</span>
              <a 
                href="https://comunidade.coderzaplicativos.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-purple-600/20 text-purple-400 font-bold hover:bg-purple-600 hover:text-white transition-all text-center"
              >
                Inscrever-se
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
