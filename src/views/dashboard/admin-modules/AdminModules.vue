<template>
  <section id="dashboard-adminmodules">
    <b-row class="match-height">
      <b-col>
        <h1 class="text-center">Your Admin Modules</h1>
      </b-col>
    </b-row>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab
          title="Operations"
          active
        >
          <h1>Users</h1>
          <div>
            <div class="border rounded py-3 px-4">
              <b-card-group deck>
                <b-card
                  scale="2"
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Users"
                  class="text-center cursor-pointer font-bold"
                  @click="alert('usersList')"
                >
                  <b-card-group class="d-flex align-items-center">
                    <b-avatar class="mr-3" />
                    <span>Manage the users in the system</span>
                  </b-card-group>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white" 
                  header="Brokerages"
                  class="text-center cursor-pointer"
                  @click="alert('dashboard-brokerages')"
                >
                  <b-card-group class="d-flex align-items-center">
                    <b-avatar class="mr-3"/>
                    <b-card-text>Manage the Brokerages in the system.</b-card-text>
                  </b-card-group>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="AR Networks"
                  class="text-center cursor-pointer"
                  @click="alert('arnetworks')"
                >
                  <b-card-group class="d-flex align-items-center">
                    <b-avatar class="mr-3"/>
                    <b-card-text>Manage the Brokerages AR Networks</b-card-text>
                  </b-card-group>
                </b-card>
              </b-card-group>
            </div>
          </div>
          <h1>Operations</h1>
          <div>
            <div class="border rounded py-3 px-4">
              <b-card-group deck>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Policies"
                  class="text-center cursor-pointer"
                  @click="alert('policies')"
                >
                  <b-card-text>View Policies</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Letter of Appointement "
                  class="text-center cursor-pointer"
                  @click="alert('letterofappointement')"
                >
                  <b-card-text>Manage letter ofAppointements </b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Polices Actions"
                  class="text-center cursor-pointer"
                  @click="alert('policesaction')"
                >
                  <b-card-text>Overidde existing Policy data</b-card-text>
                </b-card>
              </b-card-group>
              <b-card-group deck>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Claims"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>View and Manage claims</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Messages"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>view and send Messages internally</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Winbeat invoices"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>view winbeat invoices</b-card-text>
                </b-card>
              </b-card-group>
              <b-card-group deck>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Claims Lodgments"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>view and update the progress on claims Lodgments</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="integration Referrals"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>Manage Referrals for integration</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Marketing Leads"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>View and import Marketings Leads/contacts</b-card-text>
                </b-card>
              </b-card-group>
              <b-card-group deck>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="News"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>Manage the insureFest news on the dashboard(social)</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Insurance providers"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>Manage the Insurance providers</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Declines"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>Manage the declines</b-card-text>
                </b-card>
              </b-card-group>
              <b-card-group deck>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Renewals Upload Tool"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>Upload the CSV to set automatic and manual renewals</b-card-text>
                </b-card>
                <b-card
                  style="background:linear-gradient(#324ca2, #587397)"
                  text-variant="white"
                  header="Bulk Syndicate Coversion"
                  class="text-center cursor-pointer"
                >
                  <b-card-text>Covert Multiple polices over to a different Syndicate</b-card-text>
                </b-card>
              </b-card-group>
              <h3>  Wordings</h3>
              <div>
                <div>
                  <b-card-group deck>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Content Blocks"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Manage content blocks for Wordings and pages on the portal</b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Branded Documents"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Manage branded workings using an approved Syndicate Wordings </b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Syndicate Wordings"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Manage syndicate Wordings </b-card-text>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
              <h3>  Email and Marketings</h3>
              <div>
                <div>
                  <b-card-group deck>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Mail Queue"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>view the mail Queue, including checking status</b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Email Templates"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Manage the email template</b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Email Campaigns"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>rackable Email Campaigns</b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Short URLS"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Manage short URLS</b-card-text>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
              <h3> Logging and Reporting</h3>
              <div>
                <div>
                  <b-card-group deck>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Reporting"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>View Reporting</b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="PDF Queue"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>View the PDF Queue</b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Logs"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>View system and error Logs</b-card-text>
                    </b-card>
                  </b-card-group>
                  <b-card-group deck>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Staff KPI Report"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>View the insureFest Staff KPI activity report </b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Team KPI Goals"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>View the team KPI goals for the Month </b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Manage Team KPI Goals"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Manage the team KPI goals for the Month </b-card-text>
                    </b-card>
                  </b-card-group>
                </div>
              </div>

              <h3> Extra Admin Functions</h3>
              <div>
                <div>
                  <b-card-group deck>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Change covers stamp duty rate"
                      class="text-center cursor-pointer"
                    />
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Add Suburbs /Postcodes"
                      class="text-center cursor-pointer"
                    />
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Modify manual works multipliers"
                      class="text-center cursor-pointer"
                    />
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Covert Neca Policy to Tradeplus"
                      class="text-center cursor-pointer"
                    />
                  </b-card-group>
                  <b-card-group deck>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Covert Liability Plus Policy to Mining"
                      class="text-center cursor-pointer"
                    />
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Covert Mining Polices to Liability Plus"
                      class="text-center cursor-pointer"
                    />
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Check Sanctions List"
                      class="text-center cursor-pointer"
                    />
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Modify Promo Events"
                      class="text-center cursor-pointer"
                    />
                  </b-card-group>
                </div>
                <h3>System Mapping and Relationship</h3>
                <div>
                  <div>
                    <b-card-group deck>
                      <b-card
                        style="background:linear-gradient(#324ca2, #587397)"
                        text-variant="white"
                        header="Product Type Occupations "
                        class="text-center cursor-pointer"
                      >
                        <b-card-text>View a listing of the Product Types and what Occupations are available</b-card-text>
                      </b-card>
                      <b-card
                        style="background:linear-gradient(#324ca2, #587397)"
                        text-variant="white"
                        header="Product Type Cover Types"
                        class="text-center cursor-pointer"
                      >
                        <b-card-text>View a listing of the Product Types and what Covers Types are available</b-card-text>
                      </b-card>
                    </b-card-group>
                  </div>
                </div>
              </div>
              <h3>InsureFest Staff Policies</h3>
              <div>
                <div>
                  <b-card-group deck>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Employee Handbook "
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Last updated April 2021</b-card-text>
                    </b-card>
                    <b-card
                      style="background:linear-gradient(#324ca2, #587397)"
                      text-variant="white"
                      header="Workpalce Health"
                      class="text-center cursor-pointer"
                    >
                      <b-card-text>Safety Handbook last updated April 2021 </b-card-text>
                    </b-card>
                  </b-card-group>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Settings">
          <h1>
            Settings
          </h1>
          <div>
            <div>
              <b-card class="cursor-pointer">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-text>ENDORSEMENETS</b-card-text>
                  </b-col>
                  <b-col md="6">
                    <b-card-text>
                      Modify existing ENDORSEMENETS or add new ENDORSEMENETS
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-card>
              <b-card class="cursor-pointer">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-text>DOCUMENT SEARCH</b-card-text>
                  </b-col>
                  <b-col md="6">
                    <b-card-text>
                      Search for Documents
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-card>
              <b-card class="cursor-pointer">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-text>PRODUCT QUESTIONS</b-card-text>
                  </b-col>
                  <b-col md="6">
                    <b-card-text>
                      Mange questions and possible answers for products
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-card>
            </div>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>CATEGORIES</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage categories
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>MERCHANDISE</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage merchandise
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>WINBEAT/REGISTER EXPORTS</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage policies to be exported to Winbeat
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>COVER NOTICES</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage the Cover Notices to be displayed on various policies
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>BROKERAGE HEAD GROUPS</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage the Brokerage Head Groups
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>OCCUPATION LIST CREATION</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Internal Occupation List Creator
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>PRODUCT ENDORSEMENETS</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage endorsements linked to products
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>
                    EVENTS
                  </b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manages Events and event specific endorsements
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>ACCESS TYPES</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage Access Type
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>OCCUPATION RATE INCREASES</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage the Occupation rates
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>FIRE SERVICE LEVY RATES</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage fire service levy rates
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>BINDER UMRS</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage binder umrs
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>INSURANCE TYPES</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage insurance types
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>INSURANCE TYPES</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage insurance types
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>INSURANCE TYPE LIMITS</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage insurance type limits
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>RATE INCREASE CAPPING</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage rate increase capping
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
            <b-card class="cursor-pointer">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-text>ABN BLACKLIST</b-card-text>
                </b-col>
                <b-col md="6">
                  <b-card-text>
                    Manage blacklisted ABNs
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>

import {
  BTabs,
  BTab,
  BCol,
  BRow,
  BCard,
  BCardGroup,
  BCardText,
  BAvatar,
} from 'bootstrap-vue'

export default {
  components: {
    BTabs,
    BTab,
    BCol,
    BRow,
    BCard,
    BCardGroup,
    BCardText,
    BAvatar,
    // VBHover
  },
  data() {
    return {
      isHovered: false,
    }
  },
  methods: {
    alert(id) {
      this.$router.push({ name: id })
    },
  },
}
</script>
<style scoped>
.card .card-header {
  font-size: 1.3em;
  font-weight: 500;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.card:hover{
  transform: scale(1.05);
}
</style>
