function CommentSection(props) {
  return (
    <div>
      <h2>User Comments</h2>
      <p dangerouslySetInnerHTML={{ __html: props.comments }} />
    </div>
  );
}

const userComments = prompt("Enter your comments:");
<CommentSection comments={userComments} />;
