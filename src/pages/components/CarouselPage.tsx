import Carousel from "@/components/Carousel/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const items = [
    <img
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
      alt="Mountain landscape"
      className="w-full h-full object-cover rounded-xl"
    />,
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      alt="Beach"
      className="w-full h-full object-cover rounded-xl"
    />,
    <img
      src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
      alt="Lake and mountains"
      className="w-full h-full object-cover rounded-xl"
    />,
    <img
      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      alt="Mountain landscape"
      className="w-full h-full object-cover rounded-xl"
    />,
  ];

  const basicUsageCode = `
import Carousel from "@/components/Carousel/Carousel";

const items = [
  <img
    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
    alt="Mountain landscape"
  />,
  <img
    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    alt="Beach"
  />,
  <img
    src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
    alt="Lake and mountains"
  />,
  <img
    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    alt="Mountain landscape"
  />,
];

<Carousel items={items} />;
`;

  const propsData = [
    {
      prop: "items",
      type: "React.ReactNode[]",
      default: "-",
      description: "The collection of content displayed as carousel slides.",
    },
    {
      prop: "className",
      type: "string",
      default: "-",
      description: "Additional custom CSS classes applied to the carousel.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
        <p className="text-lg text-gray-600">
          Displays a collection of content one slide at a time with previous
          and next navigation.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <Carousel items={items} />
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;