import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to "/features"
  redirect('/features');
  
  return null; // This won't render because of the redirection
}
