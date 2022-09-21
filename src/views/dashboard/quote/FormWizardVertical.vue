<template>
  <b-tabs vertical nav-wrapper-class="nav-vertical" align="left">
    <!-- account datails tab -->
    <b-tab title="PERSONAL ACCIDENT">
      <b-row>
        <b-col md="6">
          <b-form-group
            label="NAME OF DIRECTOR / PARTNER / PROPRIETOR"
            label-for="v-useme1"
          >
            <b-form-input id="v-useme1" placeholder="Enter the name" />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="DATE OF BIRTH" label-for="v-useme">
            <b-form-input id="v-useme" placeholder="Enter the date of Birth" />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="GENDER" label-for="v-1">
            <v-select
              id="v-1"
              placeholder="Please choose ...."
              :options="['Please choose ...', 'Male', 'Female']"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="MANUAL WORKER/CLERIC" label-for="v-2">
            <v-select
              id="v-2"
              placeholder="Please choose ...."
              :options="['Please choose ...', 'Clerical', 'Manual Worker']"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="WAITING PERIOD" label-for="v-3">
            <v-select
              id="v-3"
              placeholder="7 Consecutive days"
              :options="[
                '7 Consecutive days',
                '14 Consecutive days',
                '21 Consecutive days',
                '28 Consecutive days',
              ]"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="BENEFIT PERIOD" label-for="v-4">
            <v-select
              id="v-4"
              placeholder="26 weeks"
              :options="['26 weeks', '52 weeks', '104 weeks', '156 weeks']"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group label="SCOPE OF COVER" label-for="v-5">
            <v-select
              id="v-5"
              placeholder="Please choose .."
              :options="[
                'Please choose ..',
                '24 hours a day/ 365 days a year',
                'working hours only, excluding commuting',
                'working hours only, including direct travel to and from work',
              ]"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="LUMP SUM (CAPITAL BENEFIT)" label-for="v-6">
            <v-select
              id="v-6"
              placeholder="Please choose .."
              :options="lumpsum"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="WEEKLY BENEFIT" label-for="v-7">
            <v-select
              id="v-7"
              :options="weekly"
              placeholder="Please choose .."
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group label="WEEKLY COVER:" label-for="v-8">
            <v-select
              id="v-8"
              placeholder="Please choose .."
              :options="[
                'Please choose ..',
                'Accident Only',
                'Accident and Sickness',
              ]"
              label="text"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-tab>

    <!-- personal info tab -->
    <b-tab title="PROFESSIONAL INDEMNITY">
      <b-row>
        <b-col cols="12" class="mb-2">
          <b-form-group
            label="PROFESSIONAL INDEMNITY LIMIT"
            label-for="v-coeuy"
          >
            <v-select
              id="v-coeuy"
              placeholder="N/A not Taken"
              :options="['N/A not Taken', '$500,000']"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label="IS A SEPARATE FEE CHARGED FOR ADVICE?"
            label-for="v-country"
          >
            <b-form-radio-group class="d-flex align-items-center">
              <label class="mr-2" for="ans"> Yes </label>
              <b-form-radio id="yes" name="ans" value="Yes" :inline="true" />
              <label class="mr-2" for="ans_no"> No </label>
              <b-form-radio id="no" name="ans_no" value="No" :inline="true" />
            </b-form-radio-group>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="v-language"
            label="NUMBER OF PROPRIETORS / PRINCIPALS GIVING ADVICE"
          >
            <v-select
              id="Language"
              v-model="proprietors"
              :options="noProprietors"
              label="text"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-tab>

    <!-- address -->
    <b-tab title="TOOLS OF TRADE">
      <b-row>
        <b-col cols="12" md="8" class="mb-2">
          <b-form-group
            label="TOOLS OF TRADE - MAXIMUM SUM INSURED"
            label-for="v-couy"
          >
            <v-select
              id="v-couy"
              placeholder="N/A not Taken"
              :options="toolsofTrade"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" style="width: 400px">
          <span style="width: 100%">&nbsp;</span>
        </b-col>
      </b-row>
    </b-tab>

    <!-- LEGALS & TAX AUDIT-->
    <b-tab title="LEGALS & TAX AUDIT">
      <b-row>
        <b-col cols="12" class="mb-2" md="8">
          <b-form-group label="LEGALS & TAX AUDIT LIMIT" label-for="v-countty">
            <v-select
              id="v-countty"
              placeholder="N/A not Taken"
              :options="[
                'N/A not Taken',
                '$25,000 limit any one claim, $50,000 aggregate limit',
              ]"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" style="width: 480px">
          <span style="width: 100%">&nbsp;</span>
        </b-col>
      </b-row>
    </b-tab>

    <!-- STATUTORY LIABILITY -->
    <b-tab title="STATUTORY LIABILITY">
      <b-row>
        <b-col cols="12" md="8" class="mb-2">
          <b-form-group label="STATUTORY LIABILITY LIMIT" label-for="v-couny">
            <v-select
              id="v-couny"
              placeholder="N/A not Taken"
              :options="['N/A not Taken', '$100,000']"
              label="text"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12" style="width: 500px">
          <span style="width: 100%">&nbsp;</span>
        </b-col>
      </b-row>
    </b-tab>
  </b-tabs>
</template>

<script>
import vSelect from "vue-select";
import {
  BRow,
  BCol,
  BTabs,
  BTab,
  BFormRadio,
  BFormRadioGroup,
  BFormGroup,
  BFormInput,
} from "bootstrap-vue";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  components: {
    BRow,
    BCol,
    BTabs,
    BTab,
    BFormRadio,
    BFormRadioGroup,
    BFormGroup,
    BFormInput,
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    return {
      proprietors: " ",
      lumpsum: [
        "please choose ..",
        "$0",
        "$50,000",
        "$60,000",
        "$70,000",
        "$80,000",
        "$90,000",
        "$100,000",
        "$110,000",
        "$120,000",
        "$130,000",
        "$140,000",
        "$150,000",
        "$160,000",
        "$170,000",
        "$180,000",
        "$190,000",
        "$200,000",
        "$210,000",
        "$220,000",
        "$230,000",
        "$240,000",
        "$250,000",
      ],
      weekly: [
        "please choose ..",
        "$0",
        "$350",
        "$500",
        "$700",
        "$800",
        "$900",
        "$1000",
        "$1,250",
        "1,500",
        "$1,750",
        "$2,000",
        "2,250",
        "$2,500",
      ],
      noProprietors: [
        { value: "please choose ..", text: "choose number of proprietors" },
        { value: "1", text: "1" },
        { value: "2", text: "2" },
        { value: "3", text: "3" },
        { value: "4", text: "4" },
        { value: "5", text: "5" },
        { value: "m_five", text: "More than 5" },
      ],
      toolsofTrade: [
        "N/A Not Taken",
        "$5000",
        "$6000",
        "$7000",
        "$8000",
        "$9000",
        "$10,000",
        "$11,000",
        "$12,000",
        "$13,000",
        "$14,000",
        "$15,000",
        "$16,000",
        "$17,000",
        "$18,000",
        "$19,000",
        "$20,000",
        "$21,000",
        "$22,000",
        "$23,000",
        "$24,000",
        "$25,000",
      ],
    };
  },
  methods: {
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
