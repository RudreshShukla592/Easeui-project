import { Layout } from "@/components/Layout/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const websiteLayoutCode = `
import { Layout } from "@/components/Layout/Layout";

<Layout direction="column" align="center" gap="sm">
  <header className="w-full border-b border-gray-200 px-6 py-4 flex items-center justify-between">
    <span className="font-semibold text-lg">EaseUI</span>

    <nav className="flex gap-6 text-sm text-gray-600">
      <span>Home</span>
      <span>Components</span>
      <span>About</span>
    </nav>
  </header>

  <main className="w-full px-6 py-16 text-center bg-gray-50">
    <h2 className="text-3xl font-bold text-gray-900">
      Build beautiful interfaces
    </h2>

    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
      Create modern and responsive interfaces with reusable UI components.
    </p>

    <button className="mt-6 px-5 py-2.5 rounded-md bg-indigo-600 text-white">
      Get Started
    </button>
  </main>

  <footer className="w-full border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-500">
    © 2026 EaseUI. All rights reserved.
  </footer>
</Layout>
`;

  const columnLayoutCode = `
import { Layout } from "@/components/Layout/Layout";

<Layout direction="column" align="center" gap="lg">
  <div className="p-4 bg-gray-100 rounded-md w-full text-center">
    Header
  </div>
  <div className="p-8 bg-indigo-100 rounded-md w-full text-center">
    Main Content
  </div>
  <div className="p-4 bg-gray-100 rounded-md w-full text-center">
    Footer
  </div>
</Layout>
`;

  const propsData = [
    {
      prop: "direction",
      type: '"row" | "column"',
      default: '"column"',
      description:
        "Controls whether children are arranged horizontally or vertically.",
    },
    {
      prop: "align",
      type: '"start" | "center" | "end"',
      default: '"start"',
      description: "Controls the alignment of children along the cross axis.",
    },
    {
      prop: "gap",
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Controls the spacing between child elements.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description: "The content or elements placed inside the layout.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom CSS classes for the layout container.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Layout
        </h1>

        <p className="text-lg text-gray-600">
          A flexible container for arranging and spacing child elements using
          predefined layout options.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <div className="flex flex-col gap-10">
          <ComponentDemo code={websiteLayoutCode}>
            <Layout direction="column" align="center" gap="sm">
              <header className="w-full border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                <span className="font-semibold text-lg">EaseUI</span>

                <nav className="flex gap-6 text-sm text-gray-600">
                  <span>Home</span>
                  <span>Components</span>
                  <span>About</span>
                </nav>
              </header>

              <main className="w-full flex-1 px-6 py-16 text-center bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-900">
                  Build beautiful interfaces
                </h2>

                <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                  Create modern and responsive interfaces with reusable UI
                  components.
                </p>

                <button className="mt-6 px-5 py-2.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
                  Get Started
                </button>
              </main>

              <footer className="w-full border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-500">
                © 2026 EaseUI. All rights reserved.
              </footer>
            </Layout>
          </ComponentDemo>

          <ComponentDemo code={columnLayoutCode}>
            <Layout direction="column" align="center" gap="lg">
              <div className="p-4 bg-gray-100 rounded-md w-full text-center">
                Header
              </div>

              <div className="p-8 bg-indigo-100 rounded-md w-full text-center">
                Main Content
              </div>

              <div className="p-4 bg-gray-100 rounded-md w-full text-center">
                Footer
              </div>
            </Layout>
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

export default LayoutPage;
