import PropsTable from "@/components/Personal/PropsTable";
import ComponentDemo from "../ComponentsDemo";
import Tooltip from "@/components/Tooltip/Tooltip";
import { Trash2, Heart } from "lucide-react";

const TooltipPage = () => {
  const basicUsageCode = `
import Tooltip from "@/components/Tooltip/Tooltip";

<Tooltip content="This is a tooltip">
  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
    Hover me
  </button>
</Tooltip>

<Tooltip content="Delete item">
 <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
    <Trash2 size={18} />
  </button>
</Tooltip>

<Tooltip content="Add to favourites">
   <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
    <Heart size={18} />
  </button>
</Tooltip>
`;

  const propsData = [
    {
      prop: "content",
      type: "string",
      default: "-",
      description: "The text displayed inside the tooltip.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "-",
      description:
        "The element or content that triggers the tooltip when hovered.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description:
        "Additional custom CSS classes applied to the tooltip wrapper.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          Displays additional information when the user hovers over an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <ComponentDemo code={basicUsageCode}>
          <div className="flex gap-6 items-center justify-center flex-wrap">
            <Tooltip content="This is a tooltip">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                Hover me
              </button>
            </Tooltip>

            <Tooltip content="Delete item">
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                <Trash2 size={18} />
              </button>
            </Tooltip>

            <Tooltip content="Add to favourites">
              <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-100">
                <Heart size={18} />
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
