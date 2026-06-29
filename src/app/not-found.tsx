import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
 return (
 <section className="container mx-auto px-4 py-24 text-center">
 <h1 className="text-6xl font-bold gradient-text">404</h1>
 <p className="mt-4">Looks like this page went on a chai break ☕</p>
 <div className="mt-6 flex justify-center gap-3">
 <Link href="/"><Button>Go Home</Button></Link>
 <Link href="https://wa.me/916006121193" target="_blank"><Button variant="green">WhatsApp Me</Button></Link>
 </div>
 </section>
 );
}
