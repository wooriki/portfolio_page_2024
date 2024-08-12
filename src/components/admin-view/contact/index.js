"use client";

export default function AdminContactView({ data }) {
  return (
    <div className="flex flex-col gap-5">
      {data && data.length
        ? data.map((item, index) => (
            <div className="p-5 border" key={index}>
              <p>{item.name}</p>
              <p>{item.cellphone}</p>
              <p>{item.message}</p>
            </div>
          ))
        : null}
    </div>
  );
}
