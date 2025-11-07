import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Play } from 'lucide-react';

interface SignCardProps {
  title: string;
  videoId: string;
}

export function SignCard({ title, videoId }: SignCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer hover:shadow-lg transition-all duration-300 group bg-white border-slate-200 hover:border-slate-300"
        onClick={() => setIsOpen(true)}
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-slate-900 flex items-center justify-between">
            {title}
            <Play className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Thumbnail do YouTube */}
          <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden relative">
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback para thumbnail de qualidade média se a máxima não existir
                e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-8 h-8 text-slate-900 ml-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Modal com vídeo */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-slate-900">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-white">{title}</DialogTitle>
          </DialogHeader>
          <div className="p-6 pt-4">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
