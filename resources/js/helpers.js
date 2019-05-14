import moment from "moment";

//Get % complete of tasks
export const getPercentage = tasks => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.is_completed).length;
    const pc = Math.floor((completed / total) * 100);
    return pc ? `${pc}%` : `0%`;
};

//Convert MySQL timestamp to useful form
export const convertTime = time => {
    return moment(time)
        .add(7, "hours")
        .fromNow();
};

//Sort Projects into 2 chunks, complete and incomplete, each ordered by last updated
export const sortProjects = projects => {
    const complete = projects
        .filter(project => project.is_completed)
        .sort((a, b) => a.updated_at - b.updated_at);
    const incomplete = projects
        .filter(project => !project.is_completed)
        .sort((a, b) => a.updated_at - b.updated_at);
    return [...incomplete, ...complete];
};
