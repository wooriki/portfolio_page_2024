export async function addData(currentTab, formData) {
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentTab}/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function getData(currentTab) {
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentTab}/add`,
      {
        method: "GET",
      }
    );

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(currentTab, formData) {
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentTab}/add`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function login(formData) {
  try {
    const response = fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentTab}/add`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
