
import React from 'react';
import { Star, Users, Clock } from 'lucide-react';

const courses = [
  {
    image: "https://picsum.photos/seed/coding1/600/400",
    category: "Full Stack",
    title: "Desenvolvedor de Apps Master",
    rating: 4.9,
    students: "1.2k",
    duration: "120h",
    price: "R$ 497,00"
  },
  {
    image: "https://picsum.photos/seed/coding2/600/400",
    category: "Mobile",
    title: "Flutter do Zero ao Avançado",
    rating: 4.8,
    students: "850",
    duration: "60h",
    price: "R$ 297,00"
  },
  {
    image: "https://picsum.photos/seed/coding3/600/400",
    category: "UI Design",
    title: "Design para Desenvolvedores",
    rating: 5.0,
    students: "420",
    duration: "40h",
    price: "R$ 197,00"
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
              <button className="p-3 rounded-xl bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white transition-all">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
