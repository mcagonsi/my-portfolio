export type project = {
    id: number;
    title: string;
    description: string;
    techStack: string;
    timeposted: Date;
    category: string;
    linkToLiveProject: string;
    linkToRepository: string;
    image:string;
    summary:string;
    isFeatured: boolean;

}

export type contactMessage = {
    name: string;
    email: string;
    phone: string;
    service: string;
    projectDetails: string;
}