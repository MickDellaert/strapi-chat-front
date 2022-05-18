import Channel from "./Channel";

const Channels = ({ channels }) => {
  console.log(channels);
  return (
    <>
      <h4 className="text-lg underline">channels</h4>
      <div className="channels">
        {channels.data.map((channel) => (
          <Channel key={channel.id} channel={channel} />
        ))}
      </div>
    </>
  );
};

export default Channels;
