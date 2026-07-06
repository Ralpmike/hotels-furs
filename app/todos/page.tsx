import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul className="p-8 text-primary-100">
      <h1 className="text-2xl mb-4 font-bold">Todos</h1>
      {todos?.map((todo) => (
        <li key={todo.id} className="mb-2 list-disc ml-4">{todo.name}</li>
      ))}
      {!todos?.length && <p>No todos found or table does not exist yet.</p>}
    </ul>
  )
}
