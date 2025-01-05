import { executeCommand } from "../../utils/command";
import { executeAxiosRequest } from "../../utils/api";
import { makeFolder, removeFolder } from "../../utils/file";
import { HubClient } from "../../utils/api";
import path from "path";
import { PATH } from "../../constants/constants";

export class GitHubService {

    async createRepo(url: string, token: string, name: string, description: string, isPrivate: boolean) {
        HubClient.defaults.url = "https://" + url;
        HubClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        console.log("hubclient", HubClient.defaults.headers);
        const repo = await executeAxiosRequest(HubClient, "/user/repos", "POST", {
            name: name,
            private: isPrivate,
            description: description,
        });
        return repo.clone_url;
    }
}
