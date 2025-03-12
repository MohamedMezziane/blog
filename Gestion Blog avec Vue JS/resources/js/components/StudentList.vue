<template>
  <div class="container mt-5">
    <h2 class="text-center text-gradient mb-4">Student List</h2>
    <table class="table table-responsive table-hover table-custom">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.email }}</td>
          <td>{{ student.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    // Fetch the students data when the component is mounted
    fetch('/students')
      .then((response) => response.json())
      .then((data) => {
        this.students = data;  // Assign the data to the students array
      })
      .catch((error) => console.error('Error fetching students:', error));
  },
};
</script>

<style scoped>
/* Container for the entire component */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa; /* Light background for the container */
}

/* Header style */
h2 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #6a11cb; /* Using a nice purple color for the text */
  margin-bottom: 20px;
}

/* Table Styling */
table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
}

th, td {
  text-align: center;
  padding: 12px;
  font-size: 1.1rem;
}

th {
  background-color: #6a11cb; /* Purple color for table headers */
  color: #fff;
  font-weight: 600;
}

tbody tr {
  transition: background-color 0.3s ease;
}

tbody tr:hover {
  background-color: #f0f0f0;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

/* Responsive table */
.table-responsive {
  overflow-x: auto;
  margin-top: 20px;
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .table {
    font-size: 1rem;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>
