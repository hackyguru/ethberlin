import { useSession, signIn, signOut } from "next-auth/react"
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Bitcoin, BookCopy, File, GitGraph, Github, Gitlab, Network, Settings, Users, X } from "lucide-react"
import { MultiStepLoader } from "./multi-step-loader";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function AccessToken() {
  const { data } = useSession()
  const { accessToken } = data

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      if (accessToken) {
        try {
          const response = await axios.get('https://api.github.com/user/repos', {
            headers: {
              'Accept': 'application/vnd.github+json',
              'Authorization': `Bearer ${accessToken}`,
              'X-GitHub-Api-Version': '2022-11-28'
            },
            params: {
              per_page: 100
            }
          });

          setRepos(response.data);
        } catch (error) {
          console.error('Error fetching repositories:', error);
        }
      } else {
        console.error('Access token is missing.');
      }
    };

    fetchRepos();
  }, [accessToken]);

  const createFile = async (owner, repo) => {
    try {
      const responsetwo = await axios.put(
        `https://api.github.com/repos/${owner}/${repo}/contents/backup.js`,
        {
          message: 'Added workflow',
          content: 'Y29uc3QgbGlnaHRob3VzZSA9IHJlcXVpcmUoJ0BsaWdodGhvdXNlLXdlYjMvc2RrJyk7Cgphc3luYyBmdW5jdGlvbiBtYWluKCkgewogIGNvbnN0IGFwaUtleSA9ICI3ODAyZmVkOC42NTc3YjRmNDBjNzQ0MzU0OTM3MDRjMDViMDZiZTJiMSI7CiAgY29uc3QgdXBsb2FkUmVzcG9uc2UgPSBhd2FpdCBsaWdodGhvdXNlLnVwbG9hZCgnLi8nLCBhcGlLZXkpOwoKICBjb25zdCBjaWQgPSB1cGxvYWRSZXNwb25zZS5kYXRhLkhhc2g7CiAgY29uc29sZS5sb2coYFVwbG9hZGVkIHRvIElQRlMgOiAke2NpZH1gKTs='
        },
        {
          headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${accessToken}`,
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }
      );

      console.log('Lighthouse pusher service created!');

      const response = await axios.put(
        `https://api.github.com/repos/${owner}/${repo}/contents/.github/workflows/hello.yml`,
        {
          message: 'Added workflow',
          content: 'bmFtZTogQmFja3VwIFJlcG9zaXRvcnkKCm9uOgogIHB1c2g6CiAgICBicmFuY2hlczoKICAgICAgLSBtYWluCiAgcHVsbF9yZXF1ZXN0OgogICAgYnJhbmNoZXM6CiAgICAgIC0gbWFpbgogICAgdHlwZXM6IFtjbG9zZWRdCgpqb2JzOgogIGJhY2t1cDoKICAgIHJ1bnMtb246IHVidW50dS1sYXRlc3QKCiAgICBzdGVwczoKICAgIC0gbmFtZTogQ2hlY2tvdXQgcmVwb3NpdG9yeQogICAgICB1c2VzOiBhY3Rpb25zL2NoZWNrb3V0QHYzCgogICAgLSBuYW1lOiBTZXQgdXAgTm9kZS5qcwogICAgICB1c2VzOiBhY3Rpb25zL3NldHVwLW5vZGVAdjMKICAgICAgd2l0aDoKICAgICAgICBub2RlLXZlcnNpb246IDE2LngKCiAgICAtIG5hbWU6IFVwbG9hZCB0byBMaWdodGhvdXNlLnN0b3JhZ2UKICAgICAgcnVuOiB8CiAgICAgICAgbnBtIGluc3RhbGwgQGxpZ2h0aG91c2Utd2ViMy9zZGsKICAgICAgICBub2RlIGJhY2t1cC5qcwoKICAgIC0gbmFtZTogU3RvcmUgQ0lECiAgICAgIHJ1bjogZWNobyAiJHt7IHN0ZXBzLnVwbG9hZC5vdXRwdXRzLmNpZCB9fSIgPiBjaWQudHh0'
        },
        {
          headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${accessToken}`,
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }
      );

      console.log('Workflow file created!');

    } catch (error) {
      console.error('Error creating file:', error);
    }
  };

  const [loading, setLoading] = useState(false);


  const loadingStates = [
    {
      text: "Accessing the repository",
    },
    {
      text: "Creating the workflow file",
    },
    {
      text: "Creating the backup script",
    },
    {
      text: "Triggering the github action",
    },
    {
      text: "Automatic peer to peer backups is successfully setup",
    },
  ];

  return <div className="space-y-10">
    <MultiStepLoader loadingStates={loadingStates} loading={loading} duration={2000} />
    {loading && (
      <button
        className="fixed top-4 right-4 text-black dark:text-white z-[120]"
        onClick={() => setLoading(false)}
      >
        <X className="h-10 w-10" />
      </button>)
    }

    <div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <>
              <Card className="w-full" key={repo.id}>
                <CardHeader className="grid  items-start gap-4 space-y-0">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center mb-5">
                      <Link href={repo.html_url}>
                        <CardTitle className=" text-lg">{repo.name}</CardTitle>
                      </Link>
                      <Dialog>
                        <DialogTrigger><Network className="h-5 w-5" /></DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="mb-5">{repo.name}</DialogTitle>
                            <DialogDescription>
                              Node ID : {repo.node_id}
                              <br/>
                              Size : {repo.size}
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <CardDescription className="h-12">
                      {repo.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400 items-center justify-between">
                    <div className="flex space-x-4">

                      <div className="flex items-center">
                        <CircleDotIcon className="mr-1 h-3 w-3 fill-gray-900 text-gray-900" />
                        {repo.language}
                      </div>
                      <div>Updated {repo.updated_at}</div>
                    </div>
                    <button onClick={() => {
                      createFile(repo.owner.login, repo.name)
                    }} className="border border-gray-600 border-opacity-50 rounded-md p-1 px-2 text-black bg-[#D4FB84]">Backup</button>
                  </div>
                </CardContent>
              </Card>
            </>
          ))}
        </div>
      </div>
    </div>
  </div>
}



function CircleDotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  )
}
