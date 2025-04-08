const ShowWhen = ({
  mode,
  children,
}: {
  mode: "summary" | "detail";
  children: React.ReactNode;
}) => {
  const showDetail = false; // 여기를 상태나 컨텍스트로 관리 가능
  return mode === "detail" && showDetail ? (
    <>{children}</>
  ) : mode === "summary" && !showDetail ? (
    <>{children}</>
  ) : null;
};

export default ShowWhen;
