import ProjectPost from "./ProjectPost"

function ProjectPostList({ posts }) {
    return (
        <div>
            {
                posts.map((post) => (
                    <ProjectPost post={post} />
                ))
            }
        </div>
    )
}

export default ProjectPostList