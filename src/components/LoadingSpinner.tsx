import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-40">
    <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
  </div>
);