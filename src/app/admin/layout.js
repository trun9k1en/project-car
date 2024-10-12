import MenuLeft from "@/components/menu-left";

export default function Layout({ children }) {
  return (
    <main className="flex flex-row justify-start w-screen h-screen  px-4 py-4">
      <MenuLeft />
      <div>{children}</div>
    </main>
  );
}
