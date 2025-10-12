"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MappedPR } from '../../../actions/getPullRequests'
import Link from 'next/link'


export const columns: ColumnDef<MappedPR>[] = [
  {
    accessorKey: "number",
    header: "PR #",
    cell: ({ row }) => <span className="font-medium">{row.original.PRNumber}</span>,
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const url = row.original.url
      return (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {row.getValue("title")}
        </Link>
      )
    },
  },
  {
    accessorKey: "CreatedBy",
    header: "Author",
    cell: ({ row }) => row.original.CreatedBy || "Unknown",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => new Date(row.original.CreatedAt).toLocaleString(),
  },
  {
    accessorKey: "reviewers",
    header: "Reviewers",
    cell: ({ row }) => {
      const reviewers = row.original.reviewers
      return reviewers && reviewers.length > 0 ? (
        <div className="flex flex-wrap gap-1">
          {reviewers.map((reviewer) => (
            <span
              key={reviewer.id}
              className="bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
              {reviewer.login}
            </span>
          ))}
        </div>
      ) : (
        <span className="text-gray-500">No reviewers</span>
      )
    },
  },
  {
    accessorKey: "lastEvent",
    header: "Last Action",
    cell: ({ row }) => <span className='bg-secondary-green-300 text-gray-800 font-medium mr-2 px-2.5 py-0.5 rounded capitalize'>{ row.original.lastEvent }</span>,

  },
  {
    accessorKey: "lastEventAt",
    header: "Last Action Date",
    cell: ({ row }) =>
      row.original.lastEventAt
        ? new Date(row.original.lastEventAt).toLocaleString()
        : "N/A",
  },
]