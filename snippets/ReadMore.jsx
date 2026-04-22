export const ReadMore = ({ link, children, className = "" }) => {
  return (
    <div className={`${className}`}>
      <h3>Read More</h3>
      <Button
        href={link}
        target="_blank"
        variant="outline"
        size="md"
        color="primary"
        className="mt-2"
      >
        <Icon icon="code" size={24} className="!mint-bg-emerald-600 mr-2" />
        {children}
      </Button>
    </div>
  );
};
