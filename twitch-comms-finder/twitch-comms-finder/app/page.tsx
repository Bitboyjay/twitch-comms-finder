import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    twitch: '',
    twitter: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + JSON.stringify(formData));
  };

  const categories = ["Just Chatting", "Variety", "Competitive / Esports", "VTuber", "Music / Art", "Other"];

  const streamers = [
    { name: "xOc", handle: "@xQc", comm: "xQCOW Comms" },
    { name: "Alji Sean", handle: "@xQE", comm: "Aldejel Novnez" },
    { name: "Justinz", handle: "@Jultzi", comm: "Mathubint Jonsen" },
    { name: "Magivin", handle: "@Malpo", comm: "Tescka Hunt" },
    { name: "Guskin", handle: "@ggyz", comm: "Alexe Gatom" },
    { name: "Jesbga", handle: "@Lushaga", comm: "Liocet Nacem" },
    { name: "Tuboo Nation", handle: "@tuboo", comm: "Fabern Airt" },
    { name: "Nick Jro", handle: "@lekjto", comm: "NiMka Kuma" },
    { name: "Neiesen", handle: "@Numba", comm: "Rayo Harame" },
    { name: "Ray Tray", handle: "@RFTy", comm: "Samar Fosmis" },
    { name: "BigSeq", handle: "@Bigceki", comm: "Susylie Nation" },
    { name: "Bo Cox", handle: "@Occxx", comm: "Ototr Koluk" },
  ];

  return (
    <main className="bg-[#494D5F] text-white min-h-screen px-6 py-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Twitch Comms Finder</h1>
        <Input placeholder="Search" className="w-full sm:w-1/3 mt-4 sm:mt-0" />
      </header>

      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <Button key={cat} variant="secondary" className="rounded-full">
            {cat}
          </Button>
        ))}
      </div>

      <p className="text-[#A0D2EB] underline cursor-pointer mb-6">
        click here to go down to twitter community submission page
      </p>

      <h2 className="text-2xl font-semibold mb-4">Top 50 Streamers This Week</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {streamers.map((s, idx) => (
          <div key={idx} className="bg-[#3A3E4F] p-4 rounded-xl shadow">
            <h3 className="text-xl font-bold">{s.name}</h3>
            <p className="text-sm text-gray-300">{s.handle}</p>
            <p className="text-[#E5EAF5]">{s.comm}</p>
          </div>
        ))}
      </div>

      <section id="submission">
        <h2 className="text-2xl font-semibold mb-4">Twitter Community Submission</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1">Name:</label>
            <Input name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label className="block mb-1">Twitch Username link:</label>
            <Input name="twitch" value={formData.twitch} onChange={handleChange} required />
          </div>
          <div>
            <label className="block mb-1">Twitter Community link:</label>
            <Input name="twitter" value={formData.twitter} onChange={handleChange} required />
          </div>
          <Button type="submit">SUBMIT</Button>
        </form>
      </section>
    </main>
  );
}
