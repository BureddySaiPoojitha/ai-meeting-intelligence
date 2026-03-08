import MeetingForm from "../components/meeting-form"

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        AI Meeting Intelligence
      </h1>

      <MeetingForm />

    </main>
  )
}