export async function addData(currentTab, formData) {
  try {
    const response = await fetch(
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
    console.error(e);
    return { success: false, message: "Error occurred while adding data." };
  }
}

export async function getData(currentTab) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentTab}/get`,
      {
        method: "GET",
      }
    );

    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return { success: false, message: "Error occurred while fetching data." };
  }
}

export async function updateData(currentTab, formData) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${currentTab}/update`,
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
    console.error(e);
    return { success: false, message: "Error occurred while updating data." };
  }
}

export async function login(formData) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return { success: false, message: "Error occurred while logging in." };
  }
}
