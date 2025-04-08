export default function Footer() {
  return (
    <footer className="border-t py-6 print:hidden">
      <p className="text-muted-foreground text-center text-sm leading-loose text-balance">
        &copy; {new Date().getFullYear()}. https://resume.qwer.dev
      </p>
    </footer>
  );
}
