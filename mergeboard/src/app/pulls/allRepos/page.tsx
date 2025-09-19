"use client"
import { getRepos, getReposByOwner, Repo } from '@/app/actions/getRepos';
import SearchBar from '@/app/components/searchBar';
import { useState } from 'react';

export default function AllRepos () {
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState<Repo[]>([])
  const [val, setVal] = useState("");
  const handleSubmit = async () => {
    try {
      setLoading(true)
      const res = await getReposByOwner({owner: val})
      setRepos(res)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <SearchBar value={val} loading={loading} onChange={setVal} onSubmit={handleSubmit} />
      <div>
        {repos.length > 0 &&
          repos.map((repo) => (
            <div
              key={repo.id}
              className="border rounded-lg p-4 shadow-sm"
            >
              <h3 className="font-bold">{repo.name}</h3>
              <p className="text-sm text-gray-600">{repo.description}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm"
              >
                View Repo
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
