type Props = {
  title: string;
  description: string;
  icon?: string;
};

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-brand.dark mb-2">{title}</h3>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}
