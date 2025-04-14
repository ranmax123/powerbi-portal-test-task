import { useEffect } from 'react';

interface UsePageMetadataProps {
  title: string;
  description?: string;
}

const usePageMetadata = ({ title, description }: UsePageMetadataProps) => {
  useEffect(() => {
    document.title = title;
    
    // Update meta description if provided
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
};

export default usePageMetadata; 