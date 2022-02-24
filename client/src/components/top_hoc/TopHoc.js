import LoadingSpinner from "../loading/Loading";
import UserTop3 from "../user_top3/UserTop3";

const topHOC = (Component, title, data = []) => {
  return () => {
    const users = data?.map((d, idx) => idx);
    return (
      <div className="mostAnswers app__card">
        <p className="app__title">{title}</p>

        {data ? (
          <>
            {users?.map((u, idx) => {
              return (
                <UserTop3
                  key={idx}
                  rating={idx + 1}
                  count={data[idx]?.total}
                  Component={Component}
                  question={data ? data[idx] : null}
                  user={data[idx]}
                />
              );
            })}
          </>
        ) : (
          <center style={{ padding: "10px 0", margin: "auto 0" }}>
            <LoadingSpinner />
          </center>
        )}
      </div>
    );
  };
};

export default topHOC;
