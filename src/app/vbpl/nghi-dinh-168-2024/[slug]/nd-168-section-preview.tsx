
export function Nd168SectionPreview({
  short1, short2, short3, detail1, detail2, detail3,
}: {
  short1: string;
  short2: string;
  short3: string;
  detail1: string;
  detail2: string;
  detail3: string;
}) {
  return (
    <div
      style={{
        // backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
        backgroundColor: 'rgb(33, 40, 49)',
        height: 630,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 12,
          fontSize: 48,
          fontStyle: 'normal',
          letterSpacing: '-0.025em',
          color: 'white',
          padding: '48px 60px 0 60px',
          lineHeight: 1.4,
        }}
      >
        <div
          style={{
            color: 'white',
            border: '2px dashed red',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          {short1}
        </div>
        <div
          style={{
            color: 'white',
            border: '2px dashed yellow',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          {short2}
        </div>
        <div
          style={{
            color: 'white',
            border: '2px solid green',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          {short3}
        </div>
        <div
          style={{
            color: 'white',
            border: '2px dashed transparent',
            borderRadius: '16px',
            padding: '0 8px',
          }}
        >
          Nghị định 168/2024
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '0 60px 0 60px',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            lineHeight: 1.4,
            padding: '4px 8px 4px 8px',
            display: 'block',
            lineClamp: '2',
            color: 'white',
            border: '2px dashed red',
            borderRadius: '16px',
          }}
        >
          {detail1}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '0 60px 0 60px',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            // padding: '0 60px 0 84px',
            padding: '4px 8px 4px 32px',
            lineHeight: 1.4,
            display: 'block',
            lineClamp: '1',
            color: 'white',
            border: '2px dashed yellow',
            borderRadius: '16px',
          }}
        >
          {detail2}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          padding: '0 60px 0 60px',
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            marginTop: 24,
            padding: '4px 8px 4px 56px',
            lineHeight: 1.4,
            display: 'block',
            lineClamp: '3',
            color: 'white',
            border: '2px solid green',
            borderRadius: '16px',
          }}
        >
          {detail3}
        </div>
      </div>
    </div>
  );
}
