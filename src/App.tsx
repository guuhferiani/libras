import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { SignCard } from './components/SignCard';

interface Sign {
  id: string;
  title: string;
  videoId: string;
}

interface SignCategory {
  id: string;
  name: string;
  signs: Sign[];
}

// Dados de exemplo - substitua pelos seus vídeos reais do YouTube
const signCategories: SignCategory[] = [
  {
    id: 'alfabeto',
    name: 'Alfabeto',
    signs: [
      { id: '1', title: 'Letra A', videoId: 'dQw4w9WgXcQ' },
      { id: '2', title: 'Letra B', videoId: 'dQw4w9WgXcQ' },
      { id: '3', title: 'Letra C', videoId: 'dQw4w9WgXcQ' },
      { id: '4', title: 'Letra D', videoId: 'dQw4w9WgXcQ' },
      { id: '5', title: 'Letra E', videoId: 'dQw4w9WgXcQ' },
      { id: '6', title: 'Letra F', videoId: 'dQw4w9WgXcQ' },
    ],
  },
  {
    id: 'numeros',
    name: 'Números',
    signs: [
      { id: '7', title: 'Número 1', videoId: 'dQw4w9WgXcQ' },
      { id: '8', title: 'Número 2', videoId: 'dQw4w9WgXcQ' },
      { id: '9', title: 'Número 3', videoId: 'dQw4w9WgXcQ' },
      { id: '10', title: 'Número 4', videoId: 'dQw4w9WgXcQ' },
      { id: '11', title: 'Número 5', videoId: 'dQw4w9WgXcQ' },
    ],
  },
  {
    id: 'cumprimentos',
    name: 'Cumprimentos',
    signs: [
      { id: '12', title: 'Olá', videoId: 'dQw4w9WgXcQ' },
      { id: '13', title: 'Bom dia', videoId: 'dQw4w9WgXcQ' },
      { id: '14', title: 'Boa tarde', videoId: 'dQw4w9WgXcQ' },
      { id: '15', title: 'Boa noite', videoId: 'dQw4w9WgXcQ' },
      { id: '16', title: 'Tchau', videoId: 'dQw4w9WgXcQ' },
    ],
  },
  {
    id: 'familia',
    name: 'Família',
    signs: [
      { id: '17', title: 'Mãe', videoId: 'dQw4w9WgXcQ' },
      { id: '18', title: 'Pai', videoId: 'dQw4w9WgXcQ' },
      { id: '19', title: 'Irmão', videoId: 'dQw4w9WgXcQ' },
      { id: '20', title: 'Irmã', videoId: 'dQw4w9WgXcQ' },
      { id: '21', title: 'Avô', videoId: 'dQw4w9WgXcQ' },
      { id: '22', title: 'Avó', videoId: 'dQw4w9WgXcQ' },
    ],
  },
  {
    id: 'cotidiano',
    name: 'Cotidiano',
    signs: [
      { id: '23', title: 'Água', videoId: 'dQw4w9WgXcQ' },
      { id: '24', title: 'Comida', videoId: 'dQw4w9WgXcQ' },
      { id: '25', title: 'Casa', videoId: 'dQw4w9WgXcQ' },
      { id: '26', title: 'Escola', videoId: 'dQw4w9WgXcQ' },
      { id: '27', title: 'Trabalho', videoId: 'dQw4w9WgXcQ' },
    ],
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState(signCategories[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-slate-900">Aprenda Libras</h1>
          <p className="text-slate-600 mt-2">
            Aprenda Língua Brasileira de Sinais através de vídeos educativos
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start mb-8 bg-white shadow-sm p-1 h-auto flex-wrap">
            {signCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 py-3 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {signCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.signs.map((sign) => (
                  <SignCard
                    key={sign.id}
                    title={sign.title}
                    videoId={sign.videoId}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
