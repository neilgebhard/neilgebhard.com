import { parseISO, format } from 'date-fns'

interface MyDateProps {
  dateString: string
}

export default function MyDate({ dateString }: MyDateProps) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
