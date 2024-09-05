import * as Yup from "yup";

const validationSchema = Yup.object({
  groupId: Yup.string(), // Unique identifier for the group (optional)
  
  groupName: Yup.string()
    .min(3, "Group name must be at least 3 characters.") // Minimum length for group name
    .max(20, "Group name must be between 3 and 20 characters.") // Maximum length for group name
    .required("Required!"), // Group name is mandatory
  
  groupDescription: Yup.string()
    .min(20, "Description should be at least 20 characters.") // Minimum length for description
    .max(300, "Description can only be up to 300 characters.") // Maximum length for description
    .required("Required!"), // Description is mandatory
  
  groupImage: Yup.string(), // URL for group image (optional)
  
  term: Yup.array(
    Yup.object({
      termId: Yup.string(), // Unique identifier for each term (optional)
      
      termName: Yup.string()
        .min(3, "Term name must be at least 3 characters.") // Minimum length for term name
        .max(20, "Term name must be within 20 characters.") // Maximum length for term name
        .required("Term Name is Required!"), // Term name is mandatory
      
      termDefinition: Yup.string()
        .min(20, "Definition should be at least 20 characters.") // Minimum length for term definition
        .max(500, "Definition can only be up to 500 characters.") // Maximum length for term definition
        .required("Term Definition is Required!"), // Term definition is mandatory
      
      termImage: Yup.string(), // URL for term image (optional)
    })
  ),
});

export default validationSchema;
