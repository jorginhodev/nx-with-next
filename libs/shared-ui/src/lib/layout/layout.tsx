import { Header, Footer } from '@dhuo/shared-ui';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">
        <div className="pt-10 pb-10 mx-auto max-w-screen-xl">{children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
