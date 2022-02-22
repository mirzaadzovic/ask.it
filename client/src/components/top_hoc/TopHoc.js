import LoadingSpinner from "../loading/Loading";
import UserTop3 from "../user_top3/UserTop3";

const topHOC = (Component, counts, title, data = null) => {
  return () => {
    const users = [1, 2, 3];
    return (
      <div className="mostAnswers app__card">
        <p className="app__title">{title}</p>

        {counts ? (
          <>
            {users.map((u, idx) => {
              return (
                <UserTop3
                  key={idx}
                  rating={idx + 1}
                  count={counts[idx]}
                  Component={Component}
                  question={data ? data[idx] : ""}
                />
              );
            })}
          </>
        ) : (
          <center style={{ padding: "10px 0" }}>
            <LoadingSpinner />
          </center>
        )}
      </div>
    );
  };
};

export default topHOC;
