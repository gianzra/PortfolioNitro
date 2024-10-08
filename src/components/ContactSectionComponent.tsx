import * as React from "react";
import { motion } from "framer-motion";
import { AbsoluteCenter, Box, Container, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Text, Textarea } from "@chakra-ui/react";
import { Formik, Form, Field, type FieldAttributes } from "formik";
import { FaPaperPlane } from "react-icons/fa";
import { SectionDescription, SectionSubtitle, SectionTitle, ContactCard, PrimaryButton } from "@/fragments";
import { contactCardList } from "@/constants";
import { fadeInTransition, staggeredContainer, validateFormSchema } from "@/utils";
import { sendEmail } from "@/services";
import SectionLayout from "@/layouts/SectionLayout";
import type { FormInitialValues } from "@/types";

function ContactSectionComponent(): React.JSX.Element {
  const initialValues: FormInitialValues = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <Box
      as="section"
      id="contact"
      paddingTop="10rem"
      paddingBottom="6rem"
      width="100vw"
    >
      {/* Contact Section Title */}
      <SectionTitle title="Contact" />

      {/* Contact Section Content */}
      <Container
        as={motion.div}
        variants={staggeredContainer(0.1, 0.1)}
        viewport={{ once: true }}
        whileInView="show"
        initial="hidden"
        maxWidth={{ base: "container.lg", lg: "75rem" }}
      >
        {/* Contact Section Subtitle & Description */}
        <Flex
          as={motion.div}
          variants={fadeInTransition("up", "tween", 0.1, 1.1)}
          direction="column"
          rowGap={{ base: 3, lg: 5 }}
        >
          <SectionSubtitle>Get in Touch 📨</SectionSubtitle>
          <SectionDescription>Im always excited to discuss product design, collaboration opportunities, or partnerships. Feel free to reach out to me through any of the channels below.</SectionDescription>
        </Flex>

        {/* Contact Section Contact Card Content */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
          gap={6}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
          marginTop={12}
        >
          {contactCardList.map(
            ({ title, contactVia, contactLink, cardIcon }, index): React.ReactNode => (
              <GridItem
                as={motion.div}
                variants={fadeInTransition("up", "tween", index * 0.25, 1.1)}
                key={`${title} - ${index}`}
              >
                <ContactCard
                  title={title}
                  contactVia={contactVia}
                  contactLink={contactLink}
                  cardIcon={cardIcon}
                />
              </GridItem>
            )
          )}
        </Grid>

        {/* Contact Section Contact Line Divider */}
        <Box
          position="relative"
          marginY={10}
          width={{ base: "90%", lg: "100%" }}
          marginX={{ base: "auto", lg: 0 }}
        >
          <Divider />
          <AbsoluteCenter
            backgroundColor="background"
            paddingX={4}
          >
          </AbsoluteCenter>
        </Box>

        {/* Contact Section Contact Form */}
        <Formik
          initialValues={initialValues}
          onSubmit={sendEmail}
          validationSchema={validateFormSchema}
        >
          {({ isSubmitting, isValid }): React.ReactNode => (
            <Form>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                gap={6}
                width={{ base: "90%", lg: "100%" }}
                marginX={{ base: "auto", lg: 0 }}
              >
              </Grid>

              <Box
                as={motion.div}
                variants={fadeInTransition("down", "tween", 0.3, 1)}
                marginTop={6}
                width={{ base: "90%", lg: "100%" }}
                marginX={{ base: "auto", lg: 0 }}
              >
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}

export default SectionLayout(ContactSectionComponent, "contact");
