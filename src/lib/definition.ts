export type project = {
    id: number;
    title: string;
    description: string;
    techstack: string;
    timeposted: Date;
    category: string;
    linkToLiveProject: string;
    linkToRepository: string;
    image:string;
    summary:string;
    isfeatured: boolean;

}

export type contactMessage = {
    name: string;
    email: string;
    phone: string;
    service: string;
    projectDetails: string;
}