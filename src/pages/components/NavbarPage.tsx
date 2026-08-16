import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `
import { Navbar } from "@/components/navbar";

<Navbar
  variant="light"
  size="default"
  animation="fadeIn"
  hoverAnimation="none"
/>

<Navbar
  variant="dark"
  size="lg"
  animation="slideUp"
  hoverAnimation="jiggle"
/>
`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "Controls the visual style of the navbar.",
    },
    {
      prop: "size",
      type: '"sm" | "default" | "lg" | "xl"',
      default: '"default"',
      description: "Controls the height of the navbar.",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | ...',
      default: '"fadeIn"',
      description: "Controls the entrance animation when the navbar mounts.",
    },
    {
      prop: "hoverAnimation",
      type: '"none" | "jiggle" | "scale" | "bounce" | ...',
      default: '"none"',
      description: "Controls the animation applied when hovering over the navbar.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom CSS classes for the navbar.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Navbar
        </h1>

        <p className="text-lg text-gray-600">
          A responsive navigation bar for displaying branding, navigation links,
          and user actions.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <div className="flex flex-col gap-8">
          <ComponentDemo code={usageCode}>
            <Navbar
              variant="light"
              size="default"
              animation="fadeIn"
              hoverAnimation="none"
            />
          </ComponentDemo>

          <ComponentDemo code={usageCode}>
            <Navbar
              variant="dark"
              size="lg"
              animation="slideUp"
              hoverAnimation="jiggle"
            />
          </ComponentDemo>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;