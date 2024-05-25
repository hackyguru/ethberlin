import { useSession, signIn, signOut } from "next-auth/react"
import axios from 'axios';
import { useState, useEffect } from 'react';

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

  return <div className="mt-10 space-y-10">
    <h1>
    Access Token: {accessToken}
    </h1>
    <div>
    <div>
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li className=" cursor-pointer" key={repo.id} onClick={() => createFile(repo.owner.login, repo.name)}>
          {repo.name}
        </li>        ))}
      </ul>
    </div>
    </div>
  </div>
}
