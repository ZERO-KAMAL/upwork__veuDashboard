<template>
  <div class="d-flex">
    <div :style="`width: ${hideQuote ? 100 : 75}%`">
      <form-wizard
        color="#437aa1"
        title="COVER INFORMATION"
        :subtitle="null"
        finish-button-text="Submit"
        back-button-text="Previous"
        class="steps-transparent mb-3"
        @on-complete="formSubmitted"
      >
        <tab-content title="Cover Information" icon="feather icon-file-text">
          <b-tabs pills>
            <b-tab title="General Information" active>
              <validation-observer ref="accountRules" tag="form">
                <b-row>
                  <b-col md="6">
                    <b-form-group label="BROKER" label-for="broker">
                      <div
                        class="d-flex"
                        style="justify-content: end; align-items: center"
                      >
                        <b-form-input
                          id="broker"
                          v-model="brooker"
                          @input="onSearchBrooker"
                        />
                        <b-spinner
                          v-if="bLoading"
                          label="Spinning"
                          style="position: absolute; margin-right: 0.5rem"
                        />
                      </div>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <validation-provider #default="{ errors }" name="liablity">
                      <b-form-group
                        label="UNDER WRITER"
                        label-for="liablity"
                        :state="errors.length > 0 ? false : null"
                      >
                        <v-select
                          id="liablity"
                          v-model="liablity"
                          :options="liablityList"
                          label="text"
                          @input="calculateTotal"
                        />
                        <b-form-invalid-feedback
                          :state="errors.length > 0 ? false : null"
                        >
                          {{ errors[0] }}
                        </b-form-invalid-feedback>
                      </b-form-group>
                    </validation-provider>
                  </b-col>
                  <b-col v-if="brokerList.length > 0" md="12">
                    <div
                      style="
                        position: absolute;
                        z-index: 99;
                        background: #e7edff;
                        max-height: 20em;
                        overflow-y: auto;
                      "
                    >
                      <div
                        v-for="b in brokerList"
                        :key="b.id"
                        style="border-bottom: 1px dashed"
                        class="blist d-flex py-1 cursor-pointer"
                        @click="onBrookerSelected(b)"
                      >
                        <div style="width: 12em; text-align: end">
                          <b-img
                            style="max-width: 12em; height: auto"
                            :src="`${baseUrl}${b.logo_path}`"
                            :alt="b.first_name"
                          />
                        </div>
                        <span class="ml-1">
                          <h4>{{ b.full_name }}</h4>
                          <b-icon-person-fill /> {{ b.name }}<br />
                          <b-icon-envelope-fill /> {{ b.email }}
                        </span>
                      </div>
                    </div>
                  </b-col>
                  <b-col md="12">
                    <validation-provider
                      #default="{ errors }"
                      name="occupation"
                    >
                      <b-form-group
                        label="OCCUPATION"
                        label-for="occupation"
                        :state="errors.length > 0 ? false : null"
                      >
                        <div
                          v-for="(occup, index) in occupList"
                          :key="index"
                          class="d-flex mt-1"
                        >
                          <v-select
                            id="occupation"
                            v-model="occup.occupation"
                            class="w-100"
                            :options="occupations"
                            label="text"
                            @input="onOccuption"
                          />
                          <div v-if="occupList.length > 1" class="w-25 ml-2">
                            <span
                              class="font-weight-bold"
                              :style="`color:${occup.color}`"
                            >
                              {{ occup.prop }}
                            </span>
                            <vue-slider
                              v-model="occup.prop"
                              :style="`border-bottom:3px solid ${occup.color};border-radius: 12px`"
                              :direction="'ltr'"
                              :width="200"
                              :height="20"
                              :min="0"
                              :max="100"
                              @change="onProportion"
                            />
                          </div>
                          <b-button
                            v-if="occupList.length > 1"
                            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                            variant="outline-danger"
                            class="ml-2"
                            @click="removeOccupation(index)"
                          >
                            <feather-icon icon="DeleteIcon" />
                          </b-button>
                        </div>
                      </b-form-group>
                      <b-form-invalid-feedback
                        :state="errors.length > 0 ? false : null"
                      >
                        {{ errors[0] }}
                      </b-form-invalid-feedback>
                    </validation-provider>
                  </b-col>
                  <b-col>
                    <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-secondary"
                      class="float-right"
                      @click="onAddOccupation"
                    >
                      <feather-icon icon="PlusIcon" class="mr-50" />
                      <span class="align-middle">Add Another Occupation</span>
                    </b-button>
                  </b-col>
                  <b-col md="12">
                    <p>BUSINESS DESCRIPTON</p>
                    <b-form-textarea
                      id="desc"
                      v-model="bDesc"
                      name="desc"
                      cols="80"
                      rows="4"
                    />
                  </b-col>
                  <b-col md="12" class="mt-1 mb-2">
                    <p class="font-weight-bold">
                      DO THE OCCUPATION(S) AND BUSINESS DESCRIPTION ACCURATELY
                      DESCRIBE ALL ASPECTS OF THE RISK?
                    </p>
                    <b-form-radio-group @change="onOccuptionRadio">
                      <label class="mr-2" for="ans"> Yes </label>
                      <b-form-radio
                        id="yes"
                        name="ans"
                        value="Yes"
                        :inline="true"
                      />
                      <label class="mr-2" for="ans_no"> No </label>
                      <b-form-radio
                        id="no"
                        name="ans_no"
                        value="No"
                        :inline="true"
                      />
                    </b-form-radio-group>
                  </b-col>
                  <b-col
                    v-for="(addr, index) in addrList"
                    :key="index"
                    class="d-flex mt-1"
                    md="12"
                  >
                    <div class="w-50 pr-2">
                      <p>
                        CLIENT STREET ADDRESS
                        {{ addrList.length > 1 ? index + 1 : "" }}
                      </p>
                      <div
                        class="d-flex"
                        style="justify-content: end; align-items: center"
                      >
                        <b-form-input
                          id="address"
                          v-model="addr.street"
                          type="text"
                          placeholder="enter street address"
                          name="address"
                          @input="onAddressSearch(addr.street, index)"
                        />
                        <b-spinner
                          v-if="addr.loading"
                          label="Spinning"
                          style="position: absolute; margin-right: 0.5rem"
                        />
                      </div>
                    </div>
                    <div class="w-50 pl-2">
                      <p>
                        CLIENT SUBURB / POSTCODE
                        {{ addrList.length > 1 ? index + 1 : "" }}
                      </p>
                      <b-input-group>
                        <b-form-input
                          id="postcodee"
                          v-model="addr.sub"
                          placeholder="begin typing a subrub or postcode"
                          type="text"
                          name="postcode"
                        />
                        <b-input-group-append v-if="addrList.length > 1">
                          <b-button
                            variant="outline-danger"
                            @click="onAddressRemove(index)"
                          >
                            Remove
                          </b-button>
                        </b-input-group-append>
                      </b-input-group>
                    </div>
                    <div
                      v-if="addressList[index].length > 0"
                      class="address-list"
                    >
                      <div
                        v-for="b in addressList[index]"
                        :key="b.id"
                        style="border-bottom: 1px dashed"
                        @click="onAddressSelected(index, b.result.description)"
                      >
                        <p class="cursor-pointer px-1">
                          {{ b.result.description }}
                        </p>
                      </div>
                    </div>
                  </b-col>
                  <b-col class="mt-2">
                    <b-button
                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                      variant="outline-secondary"
                      @click="onAddAddress"
                    >
                      <feather-icon icon="PlusIcon" class="mr-50" />
                      <span class="align-middle">Add Another Address</span>
                    </b-button>
                  </b-col>
                  <b-col v-if="showQueensOption" md="12" class="mt-1 mb-2">
                    <p class="font-weight-bold">
                      IS ALL WORK PERFORMED IN QUEENSLAND?
                    </p>
                    <b-form-radio-group @change="onQueensRadio">
                      <label class="mr-2" for="queens_yes"> Yes </label>
                      <b-form-radio
                        id="queens_yes"
                        name="queens_yes"
                        value="q_yes"
                        :inline="true"
                      />
                      <label class="mr-2" for="queens_no"> No </label>
                      <b-form-radio
                        id="queens_no"
                        name="queens_no"
                        value="q_no"
                        :inline="true"
                      />
                    </b-form-radio-group>
                  </b-col>
                  <b-col v-if="showQueensList" md="12">
                    <div
                      v-for="(q, index) in queensLand"
                      :key="index"
                      class="d-flex mt-1"
                    >
                      <b-form-input
                        disabled
                        class="w-50"
                        :placeholder="q.label"
                      />
                      <div class="pl-2">
                        <span
                          class="font-weight-bold"
                          :style="`color:${q.color}`"
                        >
                          {{ q.prop }}
                        </span>
                        <vue-slider
                          v-model="q.prop"
                          :style="`border-bottom:3px solid ${q.color};border-radius: 12px`"
                          :direction="'ltr'"
                          :width="200"
                          :height="20"
                          :min="0"
                          :max="100"
                          @change="onQueens"
                        />
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </validation-observer>
            </b-tab>
            <b-tab title="Public & Product Liability">
              <personal-details />
            </b-tab>
          </b-tabs>
        </tab-content>

        <tab-content title="Optional Type" icon="feather icon-circle">
          <b-tabs pills>
            <b-tab title="Personal Accident" active>
              <PersonalAccident />
            </b-tab>
            <b-tab title="Additional Options">
              <AdditionalOptional />
            </b-tab>
            <b-tab title="Details">
              <Details />
            </b-tab>
          </b-tabs>
        </tab-content>

        <tab-content title="Business Details" icon="feather icon-list">
          <b-tabs pills>
            <b-tab title="Business Information" active>
              <Informations />
            </b-tab>
            <b-tab title="Insured’s Information">
              <InsuredInformation />
            </b-tab>
            <b-tab title="Underwriting Questions">
              <Underwriting />
            </b-tab>
            <b-tab title="Policy Information">
              <PolicyInformation />
            </b-tab>
          </b-tabs>
        </tab-content>

        <template slot="footer" slot-scope="props">
          <div class="d-flex float-right">
            <div class="wizard-footer-left pr-2">
              <wizard-button
                v-if="props.activeTabIndex > 0"
                @click.native="props.prevTab()"
              >
                Back
              </wizard-button>
            </div>
            <div class="pr-2">
              <wizard-button
                class="rest-btn"
                style="
                  font-weight: 400;
                  border: 1px solid #888;
                  padding: 10px;
                  min-width: 80px;
                "
                @click="calculateTotal"
                >Rest</wizard-button
              >
            </div>
            <div class="wizard-footer-right">
              <wizard-button
                v-if="!props.isLastStep"
                class="wizard-footer-right"
                style="
                  background: linear-gradient(180deg, #324ca2 0%, #4da0dc 100%);
                  color: white;
                  border: none;
                "
                @click.native="props.nextTab()"
                >Next</wizard-button
              >
            </div>
          </div>
        </template>
      </form-wizard>
    </div>
    <transition name="fade">
      <div
        v-if="!hideQuote || showQuoteOpen"
        :class="showQuoteOpen ? 'quote-show' : 'quote-hide'"
        :style="`width:${hideQuote ? 50 : 25}%`"
      >
        <div
          v-if="figures"
          class="ml-1 mt-2 text-center quote"
          style="background-color: white"
        >
          <div class="d-flex justify-content-between quote-header p-1">
            <h3 style="color: white">TOTALS</h3>
            <button class="btn btn-light py-0">add Note</button>
          </div>
          <div
            class="m-1 p-1"
            style="background-color: rgba(77, 160, 220, 0.32)"
          >
            <p style="color: #5e5eaf">
              <b>Referral Triggered</b><br />
              The information provided has triggered a referral. The figures may
              not be accurate, or your quote may be declined altogether. One of
              our underwriters will contact you after your quote is submitted.
            </p>
          </div>
          <div class="quote-header mt-2 p-1">
            <h5 style="color: white">Indication Base Premiums</h5>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span>Public and Product Liablity</span>
            <span>${{ figures.base_premium }}</span>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span>Personal Accidetnt</span>
            <span>Not taken</span>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span>Professional Indemnity</span>
            <span>Not taken</span>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span>Tools of Trade</span>
            <span>Not taken</span>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span>Legal and Tax Audit</span>
            <span>Not taken</span>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span>Statutory Liablity</span>
            <span>Not taken</span>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span style="color: #4f4fcd"><b>Total Base Premium</b></span>
            <span style="color: #4f4fcd"
              ><b>${{ figures.base_premium }}</b></span
            >
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb"
          >
            <span class="text-danger"><b>All Taxes</b></span>
            <span class="text-danger"><b>$145.6</b></span>
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="border: 1px solid #bbb; font-size: 1.1em"
          >
            <span style="color: #4f4ddd"><b>Customer Pay To Broker</b></span>
            <span style="color: #4f4ddd"
              ><b>${{ figures.amount_payable }}</b></span
            >
          </div>
          <div
            class="d-flex justify-content-between p-1"
            style="
              border: 1px solid #bbb;
              font-size: 1.1em;
              background: #d2d2f6;
            "
          >
            <span style="color: #4f4ddd"><b>Broker Pay To Company</b></span>
            <span style="color: #4f4ddd"
              ><b>${{ figures.net_payable }}</b></span
            >
          </div>
          <div class="quote-footer d-flex justify-content-between p-1">
            <h5 style="color: white; font-size: 1.4em">Broker Eran</h5>
            <h4 style="color: white">${{ figures.commission }}</h4>
          </div>
          <p class="mt-1" style="color: #4f4ddd">
            Includes all fees, charges, taxes and levies which are separately
            disclosed in the invoice
          </p>
        </div>
        <div
          v-else
          class="quote text-center d-flex justify-content-center mb-1"
        >
          <b-spinner v-if="totalLoading" label="Loading..." />
          <div v-else>
            <h5>Unable to Calculate Totals.</h5>
            <p>
              You have not provided sufficient information for us to generate a
              quote figure, or we cannot provide a quote figure up-front with
              the information you have provided. Please continue with your
              quote, and an underwriter will get in touch with you after
              completion.
            </p>
          </div>
        </div>
      </div>
    </transition>
    <b-modal
      id="modal-loading"
      hide-header-close
      hide-footer
      no-close-on-backdrop
      no-close-on-esc
      header-bg-variant="light"
      :modal-footer="false"
      modal-class="modal-success"
      centered
      title="Loading Occupatons"
    >
      <b-spinner label="Loading..." />
    </b-modal>
    <b-link
      v-if="hideQuote"
      class="quote-toggle d-flex align-items-center justify-content-center"
      @click="showQuoteOpen = !showQuoteOpen"
    >
      <feather-icon icon="SettingsIcon" size="15" class="spinner" />
    </b-link>
  </div>
</template>

<script>
import vSelect from "vue-select";
import { FormWizard, TabContent, WizardButton } from "vue-form-wizard";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import VueSlider from "vue-slider-component";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import "vue-slider-component/theme/antd.css";
import {
  BRow,
  BCol,
  BImg,
  BButton,
  BInputGroup,
  BIconPersonFill,
  BIconEnvelopeFill,
  BInputGroupAppend,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormRadio,
  BSpinner,
  BLink,
  BFormRadioGroup,
  BFormInvalidFeedback,
  BTabs,
  BTab,
} from "bootstrap-vue";
import { required, email } from "@validations";
import Ripple from "vue-ripple-directive";
import store from "@/store";
import FormWizardVertical from "./FormWizardVertical.vue";
import PersonalDetails from "./PersonalDetails.vue";
import PersonalAccident from "./PersonalAccident.vue";
import AdditionalOptional from "./AdditionalOptional.vue";
import Details from "./Details.vue";
import Informations from "./BusinessInformations.vue";
import InsuredInformation from "./InsuredInformation.vue";
import Underwriting from "./Underwriting.vue";
import PolicyInformation from "./PolicyInfo.vue";

export default {
  components: {
    BTabs,
    BTab,
    ValidationProvider,
    ValidationObserver,
    BImg,
    BRow,
    BCol,
    BButton,
    BInputGroup,
    BFormTextarea,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BFormRadioGroup,
    BInputGroupAppend,
    BSpinner,
    vSelect,
    BLink,
    FormWizard,
    TabContent,
    WizardButton,
    BIconPersonFill,
    BIconEnvelopeFill,
    BFormInvalidFeedback,
    PersonalDetails,
    PersonalAccident,
    AdditionalOptional,
    Details,
    InsuredInformation,
    Underwriting,
    PolicyInformation,
    FormWizardVertical,
    Informations,
    VueSlider,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      timeout: null,
      brokerList: [],
      liablity: "",
      occupation: "",
      liablityLimit: "",
      brooker: "",
      broker: { id: 1 },
      bLoading: false,
      totalLoading: false,
      totalQueens: 0,
      sOccupation: [],
      pOccupation: [],
      occupList: [{ occupation: null, color: "green", prop: 100 }],
      addrList: [{ street: "", sub: "", loading: false }],
      bDesc: "",
      showQueensList: false,
      showQueensOption: false,
      emailValue: "",
      PasswordValue: "",
      passwordCon: "",
      first_name: "",
      addressList: { 0: [] },
      figures: null,
      showQuoteOpen: false,
      value: 50,
      landMark: "",
      pincode: "",
      twitterUrl: "",
      facebookUrl: "",
      googleUrl: "",
      linkedinUrl: "",
      city: "",
      required,
      email,
      liablityList: [
        { value: "69", text: "Default Underwriter (Liability Team)" },
        { value: "20", text: "Ben Allen" },
        { value: "67", text: "Bonnie Brown" },
        { value: "60", text: "Brooke Hopwood" },
        { value: "63", text: "catherine Mahaffey" },
        { value: "33", text: "Cheryl Boyd" },
        { value: "65", text: "David Munro" },
        { value: "24", text: "Hayley Jones" },
        { value: "25", text: "Jade Hopwood" },
        { value: "35", text: "James Irvine" },
        { value: "23", text: "katie Stranaghan" },
        { value: "29", text: "Laura Nicoll" },
        { value: "55", text: "Maddison Stewart" },
        { value: "37", text: "Naomi Maltman" },
        { value: "36", text: "Oliver Gilmore" },
        { value: "72", text: "Paul Reis" },
        { value: "66", text: "Riikka Challinor" },
        { value: "40", text: "Robyn Debono" },
        { value: "28", text: "Susann Rosenthal" },
        { value: "32", text: "Terri Gould" },
      ],
      occupations: [{ value: "select_value", text: "Select Broker first ..." }],
      queensLand: [
        { label: "Australian Capital Territory", prop: 0, color: "" },
        { label: "New South Wales", prop: 0, color: "" },
        { label: "Northern Territory", prop: 0, color: "" },
        { label: "Queensland", prop: 100, color: "green" },
        { label: "South Australia", prop: 0, color: "" },
        { label: "Tasmania", prop: 0, color: "" },
        { label: "Victoria", prop: 0, color: "" },
        { label: "Western Australia", prop: 0, color: "" },
      ],
      baseUrl: process.env.VUE_APP_BASE_API_URL,
    };
  },
  computed: {
    hideQuote() {
      return store.state.app.windowWidth < 1000;
    },
  },
  methods: {
    onSearchBrooker(value) {
      console.log(this.baseUrl);
      clearTimeout(this.timeout);
      this.brokerList = [];
      this.timeout = setTimeout(() => {
        if (value.trim().length > 0) {
          this.bLoading = true;
          const url = `${
            this.baseUrl
          }/autocomplete/brokers?term=${value.trim()}`;
          try {
            this.$http.post(url).then((response) => {
              const { status, data } = response.data;
              if (status === "success" && data) {
                this.brokerList = data;
                this.bLoading = false;
              } else {
                this.bLoading = false;
              }
            });
          } catch (err) {
            this.bLoading = false;
            this.brokerList = [];
          }
        } else if (value.trim().length === 0) {
          this.bLoading = false;
          this.brokerList = [];
        }
      }, 1000);
    },
    onBrookerSelected(broker) {
      this.brooker = broker.name;
      this.broker = broker;
      this.brokerList = [];
      this.$bvModal.show("modal-loading");
      const url = `${this.baseUrl}/product/get-occupation-list`;
      const payload = {
        brokerage: parseInt(broker.id, 10),
        module_name: "tradeplus",
      };
      try {
        this.$http.post(url, payload).then((response) => {
          const { status, data } = response.data;
          if (status === "success") {
            data.occupation_list.forEach((itm) => {
              if (itm.id) {
                this.occupations.push({ value: itm.id, text: itm.name });
              }
            });
            if (this.occupations.length > 1) {
              this.occupations[0].text = "Select Occupations";
            }
            this.$bvModal.hide("modal-loading");
          }
        });
      } catch (err) {
        this.$bvModal.hide("modal-loading");
      }
    },
    onOccuption(val) {
      if (val.value !== "select_value") {
        this.sOccupation.push(val.value);
        this.pOccupation.push(
          this.occupList.find((occ) => occ.occupation.value === val.value).prop
        );
        this.calculateTotal();
      }
    },
    onAddOccupation() {
      this.occupList.push({ occupation: null, color: "#e7e7e7", prop: 0 });
    },
    onAddAddress() {
      if (this.addrList.length < 4) {
        this.addrList.push({ street: "", sub: "", loading: false });
        this.addressList[this.addrList.length - 1] = [];
      }
    },
    onOccuptionRadio(value) {
      console.log(value);
    },
    onQueensRadio(value) {
      if (value === "q_no") {
        this.showQueensList = true;
      } else {
        this.showQueensList = false;
      }
    },
    removeOccupation(index) {
      if (this.occupList.length > 1) {
        this.occupList.splice(index, 1);
      }
      this.onProportion();
    },
    onAddressRemove(index) {
      this.addrList.splice(index, 1);
    },
    calTotal(arr) {
      let total = 0;
      arr.forEach((ele) => {
        total += ele.prop;
      });
      return total;
    },
    setDisable(val) {
      for (let i = 0; i < this.occupList.length; i += 1) {
        this.occupList[i].color = val;
      }
    },
    setQueens(val) {
      for (let i = 0; i < this.queensLand.length; i += 1) {
        this.queensLand[i].color = val;
      }
    },
    onProportion() {
      if (this.calTotal(this.occupList) === 100) {
        this.setDisable("green");
      } else if (this.calTotal(this.occupList) > 100) {
        this.setDisable("#e38484");
      } else {
        this.setDisable("#e7e7e7");
      }
    },
    onQueens() {
      if (this.calTotal(this.queensLand) === 100) {
        this.setQueens("green");
      } else if (this.calTotal(this.queensLand) > 100) {
        this.setQueens("#e38484");
      } else {
        this.setQueens("#e7e7e7");
      }
    },
    onAddressSearch(value, index) {
      clearTimeout(this.timeout);
      this.addressList[index] = [];
      this.timeout = setTimeout(() => {
        if (value.trim().length > 0) {
          this.addrList[index].loading = true;
          const url = `${
            this.baseUrl
          }/autocomplete/addresses?term=${value.trim()}`;
          try {
            this.$http.post(url).then((response) => {
              const { status, data } = response.data;
              if (status === "success") {
                this.addressList[index] = data;
                this.addrList[index].loading = false;
              }
            });
          } catch (err) {
            this.addrList[index].loading = false;
            this.addressList[index] = [];
          }
        } else if (value.trim().length === 0) {
          this.addrList[index].loading = false;
          this.addressList[index] = [];
        }
      }, 1000);
    },
    onAddressSelected(index, desc) {
      this.addrList[index].street = desc;
      this.addressList[index] = [];
      this.showQueensOption = true;
    },
    calculateTotal() {
      this.figures = null;
      this.totalLoading = true;
      const url = `${this.baseUrl}/quote_new/tradeplus/calculate-quote-totals/`;
      const payload = {
        preExistingPolicyNumber: "",
        requotedFromPolicyNumber: "",
        quoteId: "",
        productTypeId: "2",
        syndicate_id: "13",
        broker_id: this.broker.id,
        brokerage: this.broker.brokerage_id,
        broker: this.broker.name,
        underwriter: this.liablity.value,
        new_broker_firstname: "",
        new_broker_surname: "",
        new_broker_email: "",
        occupation_list_select: this.sOccupation,
        occupation_list_percent: this.pOccupation,
        occupation_percent_all: this.pOccupation.reduce((b, a) => b + a, 0),
        can_self_bind: "0",
        business_description: this.bDesc,
        business_description_confirmation: "1",
        addresses: "",
        address: [this.addrList[0].street],
        suburbLookup: ["Brendale QLD 4500"],
        postcode: ["9615"],
        has_state_no_split: "1",
        state_no_split: "1",
        turnover_split_ACT: "0",
        turnover_split_NSW: "0",
        turnover_split_NT: "0",
        turnover_split_QLD: "100",
        turnover_split_SA: "0",
        turnover_split_TAS: "0",
        turnover_split_VIC: "0",
        turnover_split_WA: "0",
        turnover_split_all: "100",
        public_liability_limit_id: "4",
        turnover: "10000",
        num_manual_workers: "1",
        bfsc_percentage: "0",
        question: {
          539: "0",
        },
        work_split: {
          residential: "",
          commercial: "",
          industrial: "",
        },
        include_personalAccident: "1",
        covers: {
          personalAccident: {
            person_name: [""],
            date_of_birth: [""],
            gender: [""],
            employee_type: [""],
            waiting_period: ["seven_days"],
            benefit_period: ["one_twenty_six_weeks"],
            scope_of_cover: [""],
            personal_accident_limit_id: [""],
            personal_accident_injury_limit_id: [""],
            cover_type: [""],
          },
        },
        include_professionalIndemnity: "1",
        professional_indemnity_limit_id: "",
        "separate_fee-comment": "",
        num_advice: "",
        include_toolsOfTrade: "1",
        tools_of_trade_limit_id: "",
        include_legalsTaxAudit: "1",
        legals_tax_audit_limit_id: "",
        include_statutoryLiability: "1",
        statutory_liability_limit_id: "",
        rated_workers: "1",
        comments: "{}",
        comments_existing: "",
        is_ajax_form: "1",
      };

      console.log(payload);

      try {
        this.$http.post(url, payload).then((response) => {
          const { status, data } = response.data;
          if (status === "success") {
            this.figures = data.data.figures;
            this.totalLoading = false;
          } else {
            this.totalLoading = false;
          }
        });
      } catch (err) {
        this.totalLoading = false;
      }
    },
    formSubmitted() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: "Form Submitted",
          icon: "EditIcon",
          variant: "success",
        },
      });
    },
  },
};
</script>
<style scoped >
.address-list {
  position: absolute;
  z-index: 99;
  margin-top: 6rem;
  background: #e7edff;
  max-height: 20em;
  overflow-y: auto;
}

.blist:hover {
  background: #b3c6ff;
}

.rest-btn:hover {
  background: #e4e6eb;
}

.quote {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.quote-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: linear-gradient(180deg, #324ca2 0%, #4da0dc 100%);
}

.quote-footer {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: linear-gradient(180deg, #324ca2 0%, #4da0dc 100%);
}

.quote-hide {
  margin-top: 60px;
}

.quote-show {
  margin-top: 120px;
  position: absolute;
  right: 0;
  background: white;
}

/* .nav-link.active {
  background: linear-gradient(
    118deg,
    #324ca2,
    rgba(50, 76, 162, 0.7)
  ) !important;
} */
</style>
